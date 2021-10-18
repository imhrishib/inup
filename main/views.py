from django.shortcuts import render

# Create your views here.
def home(request):
    context={
        'active':'home',
    }
    return render(request,"main/home.html",{'data':context})

def about(request):
    context={
        'active':'about',
    }
    return render(request,"main/about.html",{'data':context})