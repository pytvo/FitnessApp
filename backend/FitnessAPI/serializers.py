from djoser import serializers
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(serializers.UserCreateSerializer):

    class Meta(serializers.UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'username', 'password', 'email', 'full_name', 'is_staff')