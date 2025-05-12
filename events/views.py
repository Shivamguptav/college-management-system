from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Event, EventRegistration
from .forms import EventForm

@login_required
def event_list(request):
    events = Event.objects.all().order_by('-date')
    return render(request, 'events/event_list.html', {'events': events})

@login_required
def event_detail(request, event_id):
    event = get_object_or_404(Event, id=event_id)
    
    # Check if the user is a student and has registered for this event
    is_registered = False
    if hasattr(request.user, 'student_profile'):
        is_registered = EventRegistration.objects.filter(
            event=event, 
            student=request.user.student_profile
        ).exists()
    
    return render(request, 'events/event_detail.html', {
        'event': event,
        'is_registered': is_registered
    })

@login_required
def register_event(request, event_id):
    event = get_object_or_404(Event, id=event_id)
    
    # Only students can register for events
    if not hasattr(request.user, 'student_profile'):
        messages.error(request, 'Only students can register for events.')
        return redirect('events:event_detail', event_id=event_id)
    
    # Check if already registered
    if EventRegistration.objects.filter(event=event, student=request.user.student_profile).exists():
        messages.info(request, 'You are already registered for this event.')
    else:
        # Create registration
        EventRegistration.objects.create(event=event, student=request.user.student_profile)
        messages.success(request, 'You have successfully registered for this event.')
    
    return redirect('events:event_detail', event_id=event_id)

@login_required
def add_event(request):
    # Only faculty can add events
    if not hasattr(request.user, 'faculty_profile'):
        messages.error(request, 'Only faculty can add events.')
        return redirect('events:event_list')
    
    if request.method == 'POST':
        form = EventForm(request.POST, request.FILES)
        if form.is_valid():
            event = form.save(commit=False)
            event.organizer = request.user.faculty_profile
            event.save()
            messages.success(request, 'Event added successfully.')
            return redirect('events:event_list')
    else:
        form = EventForm()
    
    return render(request, 'events/add_event.html', {'form': form})
