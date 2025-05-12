from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Company, Internship, PlacementApplication
from .forms import InternshipForm, PlacementApplicationForm

@login_required
def company_list(request):
    companies = Company.objects.all().order_by('-visit_date')
    return render(request, 'placements/company_list.html', {'companies': companies})

@login_required
def company_detail(request, company_id):
    company = get_object_or_404(Company, id=company_id)
    
    # Check if the user is a student and has applied for this company
    has_applied = False
    if hasattr(request.user, 'student_profile'):
        has_applied = PlacementApplication.objects.filter(
            company=company, 
            student=request.user.student_profile
        ).exists()
    
    return render(request, 'placements/company_detail.html', {
        'company': company,
        'has_applied': has_applied
    })

@login_required
def apply_placement(request, company_id):
    company = get_object_or_404(Company, id=company_id)
    
    # Only students can apply for placements
    if not hasattr(request.user, 'student_profile'):
        messages.error(request, 'Only students can apply for placements.')
        return redirect('placements:company_detail', company_id=company_id)
    
    # Check if already applied
    if PlacementApplication.objects.filter(company=company, student=request.user.student_profile).exists():
        messages.info(request, 'You have already applied for this company.')
        return redirect('placements:company_detail', company_id=company_id)
    
    if request.method == 'POST':
        form = PlacementApplicationForm(request.POST)
        if form.is_valid():
            application = form.save(commit=False)
            application.company = company
            application.student = request.user.student_profile
            application.status = 'Applied'
            application.save()
            messages.success(request, 'Application submitted successfully.')
            return redirect('placements:company_detail', company_id=company_id)
    else:
        form = PlacementApplicationForm()
    
    return render(request, 'placements/apply_placement.html', {
        'form': form,
        'company': company
    })

@login_required
def internship_list(request):
    # For students, show only their internships
    if hasattr(request.user, 'student_profile'):
        internships = Internship.objects.filter(student=request.user.student_profile)
    # For faculty, show all internships
    elif hasattr(request.user, 'faculty_profile'):
        internships = Internship.objects.all()
    else:
        internships = []
    
    return render(request, 'placements/internship_list.html', {'internships': internships})

@login_required
def add_internship(request):
    # Only faculty can add internships
    if not hasattr(request.user, 'faculty_profile'):
        messages.error(request, 'Only faculty can add internships.')
        return redirect('placements:internship_list')
    
    if request.method == 'POST':
        form = InternshipForm(request.POST)
        if form.is_valid():
            internship = form.save(commit=False)
            internship.added_by = request.user.faculty_profile
            internship.save()
            messages.success(request, 'Internship added successfully.')
            return redirect('placements:internship_list')
    else:
        form = InternshipForm()
    
    return render(request, 'placements/add_internship.html', {'form': form})
