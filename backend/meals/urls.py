from django.urls import path
from meals.views import SelectMealsView

urlpatterns = [
    path('', SelectMealsView.as_view(), name='selected_meals'),
]
