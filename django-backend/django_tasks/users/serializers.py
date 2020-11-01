from rest_framework.serializers import ModelSerializer
from rest_framework import fields

from django.contrib.auth.models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {
            "username": {"required": True, "allow_null":False, "allow_blank":False},
            "password": {"write_only": True, "allow_null":False, "allow_blank":False},
        }

    def create(self, validated_data):
        username = validated_data.pop("username")
        password = validated_data.pop("password")

        user = User.objects.create(username=username)
        user.set_password(password)
        user.save()
        return user