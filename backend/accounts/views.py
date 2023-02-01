from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics

from accounts.models import MealsHelperUser
from accounts.serializers import MyTokenObtainPairSerializer, RegisterSerializer


class RegisterView(generics.CreateAPIView):
    queryset = MealsHelperUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer
