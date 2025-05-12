from django.urls import path
from . import views

app_name = 'faculty_portal'

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('students/', views.students_list, name='students_list'),
    path('attendance/mark/', views.mark_attendance, name='mark_attendance'),
    path('marks/add/', views.add_marks, name='add_marks'),
    path('status/update/', views.update_status, name='update_status'),
    path('profile/', views.profile, name='profile'),
]
