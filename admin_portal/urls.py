from django.urls import path
from . import views

app_name = 'admin_portal'

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('students/', views.students_list, name='students_list'),
    path('faculty/', views.faculty_list, name='faculty_list'),
    path('events/', views.events_list, name='events_list'),
    path('placements/', views.placements_list, name='placements_list'),
]
