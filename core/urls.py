from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('vision/', views.vision, name='vision'),
    path('infrastructure/', views.infrastructure, name='infrastructure'),
]
