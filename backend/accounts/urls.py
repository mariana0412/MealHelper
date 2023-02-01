from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from accounts.views import MyTokenObtainPairView, RegisterView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
