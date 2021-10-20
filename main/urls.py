from django.urls import path
from .views import *

urlpatterns = [
    path('',home,name="home"),
   
    path('about',about,name="about"),
    path('events',about,name="events"),
    path('industry',about,name="industry"),
    path('users',about,name="users"),
    path('research-and-development',about,name="research"),
    path('highlights',about,name="highlights"),
    path('announcements',about,name="announcements"),
    path('ongoing',about,name="ongoing"),
]
