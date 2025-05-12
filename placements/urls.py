from django.urls import path
from . import views

app_name = 'placements'

urlpatterns = [
    path('companies/', views.company_list, name='company_list'),
    path('companies/<int:company_id>/', views.company_detail, name='company_detail'),
    path('companies/<int:company_id>/apply/', views.apply_placement, name='apply_placement'),
    path('internships/', views.internship_list, name='internship_list'),
    path('internships/add/', views.add_internship, name='add_internship'),
]
