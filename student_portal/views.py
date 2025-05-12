from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required, user_passes_test
from faculty_portal.models import Attendance, Mark, Course
from events.models import Event
from placements.models import Company, Internship

def is_student(user):
    return user.is_authenticated and user.user_type == 'student'

@login_required
@user_passes_test(is_student)
def dashboard(request):
    student = request.user.student_profile
    courses = Course.objects.filter(student=student)
    attendance_percentage = calculate_attendance_percentage(student)
    upcoming_events = Event.objects.filter(status='Upcoming')
    
    context = {
        'student': student,
        'courses': courses,
        'attendance_percentage': attendance_percentage,
        'upcoming_events': upcoming_events,
    }
    
    return render(request, 'student_portal/dashboard.html', context)

@login_required
@user_passes_test(is_student)
def view_marks(request):
    student = request.user.student_profile
    marks = Mark.objects.filter(student=student).order_by('-date_added')
    
    # Group marks by course
    marks_by_course = {}
    for mark in marks:
        if mark.course not in marks_by_course:
            marks_by_course[mark.course] = []
        marks_by_course[mark.course].append(mark)
    
    return render(request, 'student_portal/view_marks.html', {'marks_by_course': marks_by_course})

@login_required
@user_passes_test(is_student)
def view_attendance(request):
    student = request.user.student_profile
    attendance_records = Attendance.objects.filter(student=student).order_by('-date')
    attendance_percentage = calculate_attendance_percentage(student)
    
    context = {
        'attendance_records': attendance_records,
        'attendance_percentage': attendance_percentage,
    }
    
    return render(request, 'student_portal/view_attendance.html', context)

@login_required
@user_passes_test(is_student)
def view_events(request):
    events = Event.objects.all().order_by('date')
    return render(request, 'student_portal/view_events.html', {'events': events})

@login_required
@user_passes_test(is_student)
def view_placements(request):
    companies = Company.objects.all().order_by('visit_date')
    return render(request, 'student_portal/view_placements.html', {'companies': companies})

@login_required
@user_passes_test(is_student)
def view_internships(request):
    student = request.user.student_profile
    internships = Internship.objects.filter(student=student)
    return render(request, 'student_portal/view_internships.html', {'internships': internships})

@login_required
@user_passes_test(is_student)
def profile(request):
    student = request.user.student_profile
    return render(request, 'student_portal/profile.html', {'student': student})

def calculate_attendance_percentage(student):
    total_records = Attendance.objects.filter(student=student).count()
    if total_records == 0:
        return 0
    
    present_records = Attendance.objects.filter(student=student, status='present').count()
    return (present_records / total_records) * 100
