from django.urls import path
from . import views

urlpatterns = [
    path('api/register', views.Register.as_view(), name='user_register'),
    path('api/login', views.Login.as_view(), name='user_login'),
    path('api/logout', views.Logout.as_view(), name='user_logout'),
    path('api/user', views.User.as_view(), name='get_user'),
]