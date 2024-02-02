from django.contrib import admin
from .models import User, Sex, UserWorkoutLog, UserFeedback, StepsCount, MuscleGroups, Exercise, ExerciseSet, NutritionLog

admin.site.register(User)
admin.site.register(Sex)
admin.site.register(UserWorkoutLog)
admin.site.register(UserFeedback)
admin.site.register(StepsCount)
admin.site.register(MuscleGroups)
admin.site.register(Exercise)
admin.site.register(ExerciseSet)
admin.site.register(NutritionLog)




# Register your models here.
