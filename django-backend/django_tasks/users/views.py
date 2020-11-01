from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer

from users.serializers import UserSerializer

class Register(APIView):

    def post(self, request, format=None):
        user_serializer = UserSerializer(data=request.data)
        if not user_serializer.is_valid():
            return Response(user_serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        user = user_serializer.save()
        token = Token.objects.create(user=user)
        return Response({'user': user_serializer.data, 'token': token.key}, status=status.HTTP_201_CREATED)


class Login(APIView):

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'user': UserSerializer(user).data, 'token': token.key}, status=status.HTTP_200_OK)


class User(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        token, created = Token.objects.get_or_create(user=request.user)
        return Response({'user': UserSerializer(request.user).data, 'token': token.key}, status=status.HTTP_200_OK)


class Logout(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        request.user.auth_token.delete()
        return Response({"isLogout": True}, status=status.HTTP_200_OK)
