from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import permission_classes
from rest_framework import status, permissions

from djoser.views import UserViewSet
from .serializers import UserFeedBackSerializer


from .models import UserFeedback
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
    

class UserFeedbackViewset(ViewSet):
    def get_queryset(self):
        return UserFeedback.objects.all()

    @permission_classes((permissions.IsAdminUser,))
    def get(self, request, *args, **kwargs):
        model = self.get_queryset()
        serializer = UserFeedBackSerializer(model, many=True)
        return Response(serializer.data)

    @permission_classes((permissions.AllowAny)) # ! For deploy --> [permissions.IsAuthenticated]
    def create(self, request, *args, **kwargs):
        serializer = UserFeedBackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response({'Success'}, status=status.HTTP_200_OK)