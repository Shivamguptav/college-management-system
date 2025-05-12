from django import forms
from .models import Internship, PlacementApplication
from accounts.models import Student

class InternshipForm(forms.ModelForm):
    class Meta:
        model = Internship
        fields = ['student', 'company', 'position', 'start_date', 'end_date', 'description', 'is_current']
        widgets = {
            'start_date': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'end_date': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'company': forms.TextInput(attrs={'class': 'form-control'}),
            'position': forms.TextInput(attrs={'class': 'form-control'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'is_current': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['student'].queryset = Student.objects.all()
        self.fields['student'].widget.attrs.update({'class': 'form-control'})

class PlacementApplicationForm(forms.ModelForm):
    class Meta:
        model = PlacementApplication
        fields = ['remarks']
        widgets = {
            'remarks': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
        }
