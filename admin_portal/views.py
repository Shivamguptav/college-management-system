from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required, user_passes_test
from accounts.models import User, Student, Faculty
from events.models import Event
from placements.models import Company

def is_admin(user):
    return user.is_authenticated and user.user_type == 'admin'

@login_required
@user_passes_test(is_admin)
def dashboard(request):
    total_students = Student.objects.count()
    total_faculty = Faculty.objects.count()
    upcoming_events = Event.objects.filter(status='Upcoming').count()
    placement_companies = Company.objects.count()
    
    context = {
        'total_students': total_students,
        'total_faculty': total_faculty,
        'upcoming_events': upcoming_events,
        'placement_companies': placement_companies,
    }
    
    return render(request, 'admin_portal/dashboard.html', context)

@login_required
@user_passes_test(is_admin)
def students_list(request):
    students = Student.objects.all()
    return render(request, 'admin_portal/students_list.html', {'students': students})

@login_required
@user_passes_test(is_admin)
def faculty_list(request):
    faculty = Faculty.objects.all()
    return render(request, 'admin_portal/faculty_list.html', {'faculty': faculty})

@login_required
@user_passes_test(is_admin)
def events_list(request):
    events = Event.objects.all()
    return render(request, 'admin_portal/events_list.html', {'events': events})

@login_required
@user_passes_test(is_admin)
def placements_list(request):
    companies = Company.objects.all()
    return render(request, 'admin_portal/placements_list.html', {'companies': companies})
