import requests
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from meals.pagination import StandardResultsSetPagination

from meals.models import Meal

from string import ascii_lowercase

from meals.serializers.MealSerializer import MealSerializer


def get_ingredients(meal):
    ingredients = []
    for x in range(20):
        key = 'strIngredient' + str(x)
        if meal.get(key) is not None:
            if meal.get(key) != '':
                print(meal.get(key))
                ingredients.append(meal.get(key))
    return ingredients


class MealsSearchView(generics.ListAPIView):
    queryset = Meal.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = MealSerializer
    pagination_class = StandardResultsSetPagination

    def list(self, request, *args, **kwargs):
        d = []

        available_products = self.request.user.products.all()

        for i in ascii_lowercase:
            print(i)
            print(f"www.website.com/term/{i}")
            mealsList = requests.get(f"https://www.themealdb.com/api/json/v1/1/search.php?f={i}").json().get('meals')
            if mealsList is None:
                continue
            for meal in mealsList:
                ingredients = []
                for x in range(20):
                    key = 'strIngredient' + str(x)
                    if meal.get(key) is not None:
                        if meal.get(key) != '':
                            ingredients.append(meal.get(key))
                available = True

                for ing in ingredients:
                    if available_products.filter(name=ing).first() is None:     # product or none
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
                    d.append(meal)

        serializer = MealSerializer(d, many=True)
        page = self.paginate_queryset(serializer.data)

        return self.get_paginated_response(page)
