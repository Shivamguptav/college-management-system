from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import LoginForm

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user_type = form.cleaned_data['user_type']
            
            user = authenticate(request, username=username, password=password)
            
            if user is not None and user.user_type == user_type:
                login(request, user)
                
                # Redirect based on user type
                if user.user_type == 'admin':
                    return redirect('admin_portal:dashboard')
                elif user.user_type == 'faculty':
                    return redirect('faculty_portal:dashboard')
                elif user.user_type == 'student':
                    return redirect('student_portal:dashboard')
            else:
                messages.error(request, 'Invalid credentials or user type.')
    else:
        form = LoginForm()
    
    return render(request, 'accounts/login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('core:home')
