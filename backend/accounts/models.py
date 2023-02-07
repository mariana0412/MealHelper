from django.db import models
from django.contrib.auth.models import AbstractUser


class Product(models.Model):
    name = models.CharField(max_length=40)
    description = models.CharField(max_length=1000, null=True, blank=True)
    photo = models.ImageField(upload_to="media/productsPhotos", null=True, blank=True)

    def __str__(self):
        return str(self.name)


class MealsHelperUser(AbstractUser):
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    avatar = models.ImageField(upload_to="media/accountsAvatars", null=True, blank=True)
    products = models.ManyToManyField(Product, related_name="products")

    REQUIRED_FIELDS = ["first_name", "last_name"]
