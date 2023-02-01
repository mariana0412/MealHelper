from django.db import models
from django.contrib.auth.models import AbstractUser


class Product(models.Model):
    name = models.CharField(max_length=40)
    photo = avatar = models.ImageField(upload_to="productsPhotos", null=True, blank=True)

    def __str__(self):
        return str(self.name)


class MealsHelperUser(AbstractUser):
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    avatar = models.ImageField(upload_to="accountsAvatars", null=True, blank=True)
    classes = models.ManyToManyField(Product, related_name="products")

    REQUIRED_FIELDS = ["first_name", "last_name"]
