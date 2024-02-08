from djongo import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manages import CustomUserManager
from django.utils import timezone


# ! User and Related Stuff
class Sex(models.Model):
    gender = models.CharField(max_length=128)
    slug = models.SlugField(max_length=128)

    def __str__(self):
        return self.gender

    class Meta:
        verbose_name = 'Gender'
        verbose_name_plural = 'Genders'

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=128, unique=True)
    password = models.CharField(max_length=128)
    email = models.EmailField()
    full_name = models.CharField(max_length=129)
    country = models.CharField(max_length=120)
    image = models.ImageField(upload_to='images/users/')
    date_of_birth = models.DateField()
    sex = models.ForeignKey(Sex, on_delete=models.PROTECT)

    weight = models.IntegerField()
    height = models.IntegerField()
    steps_target = models.IntegerField(default=12000)
    bmi = models.FloatField(default=0)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = "username"

    objects = CustomUserManager()

    def save(self, *args, **kwargs):
        if self.height and self.weight:
            self.bmi = round(self.weight / ((self.height/100)**2), 1)
        super(User, self).save(*args, **kwargs)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

class UserWorkoutLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    duration = models.IntegerField()
    calories = models.IntegerField()

    def __str__(self):
        return self.user.username
    
    class Meta:
        verbose_name = 'User Workout Log'
        verbose_name_plural = 'User Workouts'

class UserFeedback(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    title = models.CharField(max_length=128)
    stars = models.IntegerField()
    comment = models.TextField()

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'User Feedback'
        verbose_name_plural = 'User Feedbacks'

class StepsCount(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    count = models.IntegerField()

    def __str__(self):
        return self.user.username
    
    class Meta:
        verbose_name = 'Steps Count'
        verbose_name_plural = 'Steps Counts'

# ! Exercises Databases
        
class MuscleGroups(models.Model):
    name = models.CharField(max_length=128)
    photo = models.ImageField(upload_to='Muscles', null=True, blank=True)
    slug = models.SlugField(max_length=128)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Muscle Group'
        verbose_name_plural = 'Muscle Groups'

class Exercise(models.Model):
    name = models.CharField(max_length=128)
    muscle_group = models.ManyToManyField(MuscleGroups, related_name='muscles')
    photo = models.ImageField(upload_to='exercises/', null=True, blank=True)
    description = models.TextField()
    cal_per_min = models.IntegerField()
    slug = models.SlugField(max_length=129)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Exercise'
        verbose_name_plural = 'Exercises'

class ExerciseSet(models.Model):
    log = models.ForeignKey(UserWorkoutLog, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    set_numb = models.IntegerField()
    reps = models.IntegerField()
    rest = models.IntegerField()

    def __str__(self):
        return f'User and Exercise: {self.log.user.username} —— {self.exercise.name}'
    
    class Meta:
        verbose_name = 'Exercise Set'
        verbose_name_plural = 'Exercise Sets'

# ! Nutrition
        
class NutritionLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    food = models.CharField(max_length=129)
    quantity = models.IntegerField(default=0)
    caloric_intake = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username
    
    class Meta:
        verbose_name = 'Nutrition Log'
        verbose_name_plural = 'Nutrition Logs'