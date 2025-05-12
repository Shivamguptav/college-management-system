from django.db import models
from accounts.models import Faculty, Student

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    venue = models.CharField(max_length=100)
    organizer = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='organized_events')
    type = models.CharField(max_length=50, choices=(
        ('Academic', 'Academic'),
        ('Cultural', 'Cultural'),
        ('Workshop', 'Workshop'),
        ('Sports', 'Sports'),
        ('Career', 'Career'),
    ))
    status = models.CharField(max_length=20, choices=(
        ('Upcoming', 'Upcoming'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled'),
    ))
    image = models.ImageField(upload_to='event_images/', null=True, blank=True)
    
    def __str__(self):
        return self.title

class EventRegistration(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='registrations')
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='event_registrations')
    registration_date = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['event', 'student']
    
    def __str__(self):
        return f"{self.student} - {self.event}"
