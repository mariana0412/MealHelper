from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from auth.views import MyTokenObtainPairView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
