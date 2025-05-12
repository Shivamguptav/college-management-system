from django import forms
from .models import Attendance, Mark, FacultyStatus, Course
from accounts.models import Student

class AttendanceForm(forms.ModelForm):
    class Meta:
        model = Attendance
        fields = ['student', 'date', 'status']
        widgets = {
            'date': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'status': forms.Select(attrs={'class': 'form-control'}),
        }
    
    def __init__(self, *args, **kwargs):
        faculty = kwargs.pop('faculty', None)
        super().__init__(*args, **kwargs)
        
        if faculty:
            # Filter students based on faculty's courses
            student_ids = Course.objects.filter(faculty=faculty).values_list('student', flat=True)
            self.fields['student'].queryset = Student.objects.filter(id__in=student_ids)
            self.fields['student'].widget.attrs.update({'class': 'form-control'})

class MarkForm(forms.ModelForm):
    class Meta:
        model = Mark
        fields = ['student', 'course', 'exam_type', 'max_marks', 'obtained_marks', 'remarks']
        widgets = {
            'exam_type': forms.TextInput(attrs={'class': 'form-control'}),
            'max_marks': forms.NumberInput(attrs={'class': 'form-control'}),
            'obtained_marks': forms.NumberInput(attrs={'class': 'form-control'}),
            'remarks': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
        }
    
    def __init__(self, *args, **kwargs):
        faculty = kwargs.pop('faculty', None)
        super().__init__(*args, **kwargs)
        
        if faculty:
            # Filter courses based on faculty
            self.fields['course'].queryset = Course.objects.filter(faculty=faculty)
            self.fields['course'].widget.attrs.update({'class': 'form-control'})
            
            # Filter students based on faculty's courses
            student_ids = Course.objects.filter(faculty=faculty).values_list('student', flat=True)
            self.fields['student'].queryset = Student.objects.filter(id__in=student_ids)
            self.fields['student'].widget.attrs.update({'class': 'form-control'})

class FacultyStatusForm(forms.ModelForm):
    class Meta:
        model = FacultyStatus
        fields = ['date', 'status', 'details']
        widgets = {
            'date': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'status': forms.Select(attrs={'class': 'form-control'}),
            'details': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
        }
