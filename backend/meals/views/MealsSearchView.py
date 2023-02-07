import requests
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from meals.pagination import StandardResultsSetPagination
from meals.serializers.MealSerializer import MealSerializer
from meals.models import Meal
from string import ascii_lowercase


class MealsSearchView(generics.ListAPIView):
    queryset = Meal.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = MealSerializer
    pagination_class = StandardResultsSetPagination

    def list(self, request, *args, **kwargs):
        possible_meals = []
        available_products = self.request.user.products.all()
        meals_list = form_meals_list()

        for meal in meals_list:
            ingredients = get_ingredients(meal)
            available = True

            for ing in ingredients:
                if available_products.filter(name=ing).first() is None:
                    available = False
                    break

            if available:
                url = meal.get('strMealThumb')
                response = requests.get(url)
                if response.status_code == 200:
                    with open('.\\media\\mealsPhotos\\' + meal.get('idMeal') + '.jpg', 'wb') as f:
                        f.write(response.content)

                meal = {
                    'name': meal.get('strMeal'),
                    'category': meal.get('strCategory'),
                    'recipe': meal.get('strInstructions'),
                    'photo': '.\\media\\mealsPhotos\\' + meal.get('idMeal') + '.jpg',
                }
                possible_meals.append(meal)

        serializer = MealSerializer(possible_meals, many=True)
        page = self.paginate_queryset(serializer.data)

        return self.get_paginated_response(page)


def get_ingredients(meal):
    ingredients = []
    for x in range(20):
        key = 'strIngredient' + str(x)
        if meal.get(key) is not None:
            if meal.get(key) != '':
                ingredients.append(meal.get(key))
    return ingredients


def form_meals_list():
    mealsList = []
    for letter in ascii_lowercase:
        letterMealsList = requests.get(f"https://www.themealdb.com/api/json/v1/1/search.php?f={letter}").json().get('meals')
        if letterMealsList is not None:
            mealsList += letterMealsList
    return mealsList
