from djongo import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manages import CustomUserManager
from django.utils import timezone

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
    date_of_birth = models.DateField()
    sex = models.ForeignKey(Sex, on_delete=models.PROTECT)
    weight = models.IntegerField()
    height = models.IntegerField()
    desired_weight = models.IntegerField()
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now())

    USERNAME_FIELD = "username"

    objects = CustomUserManager()

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

class ExercisesType(models.Model):
    type = models.CharField(max_length=129)
    slug = models.SlugField(max_length=130)

    def __str__(self):
        return self.type

    class Meta:
        verbose_name = 'Exercises Type'
        verbose_name_plural = 'Exercises Types'

class Exercises(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    pictures = models.FileField(upload_to='exercises/pictures')
    type = models.ForeignKey(ExercisesType, on_delete=models.PROTECT)
    calories_burnt_per_hr = models.IntegerField()
    time = models.TimeField()
    slug = models.SlugField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Exercise'
        verbose_name_plural = 'Exercises'