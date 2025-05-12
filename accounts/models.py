from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    USER_TYPE_CHOICES = (
        ('admin', 'Admin'),
        ('faculty', 'Faculty'),
        ('student', 'Student'),
    )
    
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    
    def __str__(self):
        return f"{self.username} ({self.get_user_type_display()})"

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    roll_number = models.CharField(max_length=20, unique=True)
    department = models.CharField(max_length=100)
    year = models.CharField(max_length=20)
    date_of_birth = models.DateField(null=True, blank=True)
    address = models.TextField(blank=True)
    phone_number = models.CharField(max_length=15, blank=True)
    guardian_name = models.CharField(max_length=100, blank=True)
    guardian_phone = models.CharField(max_length=15, blank=True)
    
    def __str__(self):
        return f"{self.user.get_full_name()} ({self.roll_number})"

class Faculty(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='faculty_profile')
    employee_id = models.CharField(max_length=20, unique=True)
    department = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    date_of_joining = models.DateField(null=True, blank=True)
    qualification = models.CharField(max_length=200, blank=True)
    experience = models.PositiveIntegerField(default=0)
    phone_number = models.CharField(max_length=15, blank=True)
    
    def __str__(self):
        return f"{self.user.get_full_name()} ({self.employee_id})"
