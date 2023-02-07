from django.db import models

from accounts.models import Product


class Meal(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=40, null=True, blank=True)
    recipe = models.CharField(max_length=2000, null=True, blank=True)
    photo = models.ImageField(upload_to="media/mealsPhotos", null=True, blank=True)

    def __str__(self):
        return str(self.name)


class Ingredient(Product):
    measure = models.CharField(max_length=40)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.name)