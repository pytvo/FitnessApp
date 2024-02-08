from djoser import serializers as sr
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import UserFeedback, UserWorkoutLog
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