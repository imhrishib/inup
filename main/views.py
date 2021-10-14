from django.shortcuts import render

# Create your views here.
def home(request):
    context={
        'active':'home',
    }
    return render(request,"main/template1.html",{'data':context})
def aboutus(request):
    context={
        'active':'about',
    }
    return render(request,"main/template1.html",{'data':context})