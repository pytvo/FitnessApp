from djoser import serializers
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(serializers.UserCreateSerializer):

    class Meta(serializers.UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'username', 'password', 'email', 'full_name', 'weight', 'height', 'steps_target', 'country', 'is_staff')

class UserSerializer(serializers.UserSerializer):

    class Meta(serializers.UserSerializer.Meta):
        model = User
        fields = '__all__'
        depth = 1