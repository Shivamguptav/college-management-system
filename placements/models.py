from django.db import models
from accounts.models import Student, Faculty

class Company(models.Model):
    name = models.CharField(max_length=100)
    industry = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    visit_date = models.DateField()
    eligibility = models.CharField(max_length=200)
    package = models.CharField(max_length=50)
    positions = models.CharField(max_length=200)
    status = models.CharField(max_length=20, choices=(
        ('Upcoming', 'Upcoming'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled'),
    ))
    coordinator = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='coordinated_placements')
    
    def __str__(self):
        return self.name

class Internship(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='internships')
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField(blank=True)
    is_current = models.BooleanField(default=False)
    added_by = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='added_internships')
    
    def __str__(self):
        return f"{self.student} - {self.company} - {self.position}"

class PlacementApplication(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='placement_applications')
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='applications')
    status = models.CharField(max_length=20, choices=(
        ('Applied', 'Applied'),
        ('Shortlisted', 'Shortlisted'),
        ('Interviewed', 'Interviewed'),
        ('Selected', 'Selected'),
        ('Rejected', 'Rejected'),
    ))
    applied_date = models.DateField(auto_now_add=True)
    remarks = models.TextField(blank=True)
    
    class Meta:
        unique_together = ['student', 'company']
    
    def __str__(self):
        return f"{self.student} - {self.company} - {self.status}"
