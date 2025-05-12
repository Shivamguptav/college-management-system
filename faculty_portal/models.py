from django.db import models
from accounts.models import Faculty, Student

class Attendance(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='attendance_records')
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.CharField(max_length=10, choices=(
        ('present', 'Present'),
        ('absent', 'Absent'),
        ('late', 'Late'),
    ))
    
    class Meta:
        unique_together = ['student', 'date']
    
    def __str__(self):
        return f"{self.student} - {self.date} - {self.status}"

class Course(models.Model):
    code = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='courses')
    description = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.code} - {self.name}"

class Mark(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='marks')
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    exam_type = models.CharField(max_length=50)
    max_marks = models.PositiveIntegerField()
    obtained_marks = models.PositiveIntegerField()
    remarks = models.TextField(blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.student} - {self.course} - {self.exam_type}"
    
    @property
    def percentage(self):
        return (self.obtained_marks / self.max_marks) * 100

class FacultyStatus(models.Model):
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='status_updates')
    date = models.DateField()
    status = models.CharField(max_length=50, choices=(
        ('present', 'Present'),
        ('absent', 'Absent'),
        ('event', 'Conducting Event'),
        ('seminar', 'Organizing Seminar/Workshop'),
    ))
    details = models.TextField(blank=True)
    
    class Meta:
        unique_together = ['faculty', 'date']
    
    def __str__(self):
        return f"{self.faculty} - {self.date} - {self.status}"
