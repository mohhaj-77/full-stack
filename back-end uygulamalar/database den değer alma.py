
from django.db import models


class School(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)

    def __str__(self):
        return self.name

from django.shortcuts import render, redirect
from .models import School
from .forms import SchoolFrom



def school(request):
    school = School.objects.all()
    if request.method == 'POST':
        form = SchoolFrom(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = SchoolFrom()
    context = {
        'school': school,
        'form': form
    }
    return render(request, 'school/school.html', context)
