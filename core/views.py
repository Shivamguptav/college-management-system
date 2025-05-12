from django.shortcuts import render

def home(request):
    return render(request, 'core/home.html')

def about(request):
    return render(request, 'core/about.html')

def vision(request):
    return render(request, 'core/vision.html')

def infrastructure(request):
    return render(request, 'core/infrastructure.html')
