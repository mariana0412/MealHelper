from django.contrib import admin

from meals.models import Meal


class MealAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'recipe', 'photo')


admin.site.register(Meal, MealAdmin)