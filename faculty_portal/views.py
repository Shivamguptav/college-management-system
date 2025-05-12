from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib import messages
from accounts.models import Student
from events.models import Event
from placements.models import Company, Internship
from .models import Attendance, Course, Mark, FacultyStatus
from .forms import AttendanceForm, MarkForm, FacultyStatusForm

def is_faculty(user):
    return user.is_authenticated and user.user_type == 'faculty'

@login_required
@user_passes_test(is_faculty)
def dashboard(request):
    faculty = request.user.faculty_profile
    courses = Course.objects.filter(faculty=faculty)
    students_count = Student.objects.filter(course__faculty=faculty).distinct().count()
    upcoming_events = Event.objects.filter(status='Upcoming').count()
    
    context = {
        'faculty': faculty,
        'courses': courses,
        'students_count': students_count,
        'upcoming_events': upcoming_events,
    }
    
    return render(request, 'faculty_portal/dashboard.html', context)

@login_required
@user_passes_test(is_faculty)
def students_list(request):
    faculty = request.user.faculty_profile
    students = Student.objects.filter(course__faculty=faculty).distinct()
    return render(request, 'faculty_portal/students_list.html', {'students': students})

@login_required
@user_passes_test(is_faculty)
def mark_attendance(request):
    faculty = request.user.faculty_profile
    
    if request.method == 'POST':
        form = AttendanceForm(request.POST, faculty=faculty)
        if form.is_valid():
            form.save()
            messages.success(request, 'Attendance marked successfully.')
            return redirect('faculty_portal:attendance_list')
    else:
        form = AttendanceForm(faculty=faculty)
    
    return render(request, 'faculty_portal/mark_attendance.html', {'form': form})

@login_required
@user_passes_test(is_faculty)
def add_marks(request):
    faculty = request.user.faculty_profile
    
    if request.method == 'POST':
        form = MarkForm(request.POST, faculty=faculty)
        if form.is_valid():
            form.save()
            messages.success(request, 'Marks added successfully.')
            return redirect('faculty_portal:marks_list')
    else:
        form = MarkForm(faculty=faculty)
    
    return render(request, 'faculty_portal/add_marks.html', {'form': form})

@login_required
@user_passes_test(is_faculty)
def update_status(request):
    faculty = request.user.faculty_profile
    
    if request.method == 'POST':
        form = FacultyStatusForm(request.POST)
        if form.is_valid():
            status = form.save(commit=False)
            status.faculty = faculty
            status.save()
            messages.success(request, 'Status updated successfully.')
            return redirect('faculty_portal:dashboard')
    else:
        form = FacultyStatusForm()
    
    return render(request, 'faculty_portal/update_status.html', {'form': form})

@login_required
@user_passes_test(is_faculty)
def profile(request):
    faculty = request.user.faculty_profile
    return render(request, 'faculty_portal/profile.html', {'faculty': faculty})
