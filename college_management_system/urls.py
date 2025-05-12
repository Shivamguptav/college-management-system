"""
URL configuration for college_management_system project.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path('accounts/', include('accounts.urls')),
    path('admin-portal/', include('admin_portal.urls')),
    path('faculty-portal/', include('faculty_portal.urls')),
    path('student-portal/', include('student_portal.urls')),
    path('events/', include('events.urls')),
    path('placements/', include('placements.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
