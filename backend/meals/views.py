import requests
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from meals.pagination import StandardResultsSetPagination

from meals.models import Meal
from meals.serializers import MealSerializer


def get_ingredients(meal):
    ingredients = []
    for x in range(20):
        key = 'strIngredient' + str(x)
        if meal.get(key) is not None:
            if meal.get(key) != '':
                ingredients.append(meal.get(key))
    return ingredients


class SelectMealsView(generics.ListAPIView):
    queryset = Meal.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = MealSerializer
    pagination_class = StandardResultsSetPagination

    def list(self, request, *args, **kwargs):
        d = []
        mealObj = requests.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').json().get('meals')[0]

        ingredients = get_ingredients(mealObj)

        url = mealObj.get('strMealThumb')
        response = requests.get(url)
        if response.status_code == 200:
            with open('.\\media\\mealsPhotos\\' + mealObj.get('idMeal') + '.jpg', 'wb') as f:
                f.write(response.content)

        meal = {
            'name': mealObj.get('strMeal'),
            'category': mealObj.get('strCategory'),
            'recipe': mealObj.get('strInstructions'),
            'photo': '.\\media\\mealsPhotos\\' + mealObj.get('idMeal') + '.jpg',
        }
        d.append(meal)
        serializer = MealSerializer(d, many=True)
        page = self.paginate_queryset(serializer.data)

        return self.get_paginated_response(page)
