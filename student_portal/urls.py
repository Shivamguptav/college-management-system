from django.urls import path
from . import views

app_name = 'student_portal'

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('marks/', views.view_marks, name='view_marks'),
    path('attendance/', views.view_attendance, name='view_attendance'),
    path('events/', views.view_events, name='view_events'),
    path('placements/', views.view_placements, name='view_placements'),
    path('internships/', views.view_internships, name='view_internships'),
    path('profile/', views.profile, name='profile'),
]
