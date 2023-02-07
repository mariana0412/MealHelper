from django.urls import path

from meals.views.MealsSearchView import MealsSearchView

urlpatterns = [
    path('', MealsSearchView.as_view(), name='selected_meals'),
]
