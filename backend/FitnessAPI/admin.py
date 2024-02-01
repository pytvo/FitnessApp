from django.contrib import admin
from .models import User, Sex, ExercisesType, Exercises

admin.site.register(User)
admin.site.register(Sex)
admin.site.register(Exercises)
admin.site.register(ExercisesType)


# Register your models here.
