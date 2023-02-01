from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics

from accounts.models import MealsHelperUser, Product
from accounts.serializers import MyTokenObtainPairSerializer, RegisterSerializer, AddProductSerializer


class RegisterView(generics.CreateAPIView):
    queryset = MealsHelperUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class AddProductView(generics.CreateAPIView):
    queryset = Product.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = AddProductSerializer

    # def perform_create(self, serializer):
    #     product = Product(
    #         name=validated_data['name'],
    #         description=validated_data['description'],
    #         photo=validated_data['photo'],
    #     )
    #     user = self.context['request'].user
    #
    #     try:
    #         Product.objects.get(name=validated_data['name'])
    #     except ObjectDoesNotExist:
    #         product_is_in_db = False
    #     else:
    #         product_is_in_db = True
    #
    #     if not product_is_in_db:
    #         product.save()
    #
    #     user.products.add(product)
    #
    #     return product
