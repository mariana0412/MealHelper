from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics

from accounts.models import MealsHelperUser, Product
from accounts.serializers.AddProductSerializer import AddProductSerializer
from accounts.serializers.MyTokenObtainPairSerializer import MyTokenObtainPairSerializer
from accounts.serializers.RegisterSerializer import RegisterSerializer


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
