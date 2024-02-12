from djoser import serializers as sr
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import UserFeedback, StepsCount, NutritionLog, MuscleGroups, Exercise, UserWorkoutLog, ExerciseSet
User = get_user_model()

class UserCreateSerializer(sr.UserCreateSerializer):

    class Meta(sr.UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'username', 'password', 'email', 'full_name', 'weight', 'height', 'steps_target', 'country', 'is_staff')

class UserSerializer(sr.UserSerializer):

    class Meta(sr.UserSerializer.Meta):
        model = User
        fields = '__all__'
        depth = 1

class UserFeedBackSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = UserFeedback
        fields = '__all__'
        depth = 2

class StepsCountSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = StepsCount
        fields = '__all__'
        depth = 2

class NutritionLogSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = NutritionLog
        fields = '__all__'
        depth = 2

class MuscleGroupSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = MuscleGroups
        fields = '__all__'

class ExerciseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Exercise
        fields = '__all__'
        depth = 1

class UserWorkoutLogSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = UserWorkoutLog
        fields = '__all__'
        depth = 2

class ExerciseSetSerializer(serializers.ModelSerializer):

    class Meta:
        model = ExerciseSet
        fields = '__all__'
        depth = 2