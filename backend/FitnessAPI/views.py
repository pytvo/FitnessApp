from rest_framework.views import APIView
from rest_framework.response import Response
from djoser.views import UserViewSet
from rest_framework import status

class WelcomeView(APIView):
    def get(self, request):
        return Response({'Welcome to our Fitness App API, where you can find data required for frontend'})
    

class ActivationView(UserViewSet):
    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs.setdefault('context', self.get_serializer_context())

        kwargs['data'] = {'uid': self.kwargs['uid'], 'token': self.kwargs['token']}

        return serializer_class(*args, **kwargs)
    
    def activation(self, request, *args, **kwargs):
        super().activation(request, *args, **kwargs)
        return Response({'Success'}, status=status.HTTP_200_OK)