from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework import status, permissions

from djoser.views import UserViewSet
from .serializers import UserFeedBackSerializer, StepsCountSerializer, NutritionLogSerializer, MuscleGroupSerializer, ExerciseSerializer, ExerciseSetSerializer, UserWorkoutLogSerializer


from .models import UserFeedback, StepsCount, NutritionLog, MuscleGroups, Exercise, UserWorkoutLog, ExerciseSet
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
    
    def get_permissions(self):
        if self.action == 'get':
            self.permission_classes = [permissions.IsAdminUser]
        elif self.action == 'create':
            self.permission_classes = [permissions.AllowAny] # ! For deploy --> [permissions.IsAuthenticated]
        return super().get_permissions()

    def get(self, request, *args, **kwargs):
        model = self.get_queryset()
        serializer = UserFeedBackSerializer(model, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        request.data._mutable = True
        request.data.update({'user':request.user.id})
        request.data._mutable = False
        serializer = UserFeedBackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response({'Success'}, status=status.HTTP_200_OK)
    
class StepsCountViewSet(ViewSet):
    permission_classes = [permissions.IsAuthenticated] # ! For deploy --> [permissions.IsAuthenticated]

    def get_queryset(self):
        return StepsCount.objects.filter(user=self.request.user)
    
    def get(self, request, *args, **kwargs):
        model = self.get_queryset()
        serializer = StepsCountSerializer(model, many=True)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        request.data['user'] = request.user.id
        serializer = StepsCountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response({'Success':request.data}, status=status.HTTP_200_OK)
    
class NutritionLogViewSet(ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return NutritionLog.objects.filter(user=self.request.user)
    
    def get(self, request, *args, **kwargs):
        model = self.get_queryset()
        serializer = NutritionLogSerializer(model, many=True)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        request.data['user'] = request.user.id
        serializer = NutritionLogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response({'Success':request.data}, status=status.HTTP_200_OK)
    
class MuscleGroupAPIView(APIView):
    
    def get(self, request, *args, **kwargs):
        model = MuscleGroups.objects.all()
        serializer = MuscleGroupSerializer(model, many=True)

        return Response(serializer.data)
    
class ExerciseAPIView(APIView):

    def get(self, request, *args, **kwargs):
        model = Exercise.objects.all()
        serializer = ExerciseSerializer(model, many=True)

        return Response(serializer.data)
    

class UserWorkoutLogView(ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return UserWorkoutLog.objects.filter(user=self.request.user)

    def get(self, request, *args, **kwargs):
        model = self.get_queryset()
        serializer = UserWorkoutLogSerializer(model, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        request.data['user'] = request.user.id
        serializer = UserWorkoutLogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response({'Success':request.data}, status=status.HTTP_200_OK)
    

class ExerciseSetView(ViewSet):
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return ExerciseSet.objects.filter(log__user=self.request.user)

    def get(self, request, *args, **kwargs):
        model = self.get_queryset()
        serializer = ExerciseSetSerializer(model, many=True)
        return Response(serializer.data)
    

    # ! LATER
    # def post(self, request, *args, **kwargs):
    #     request.data['user'] = request.user.id
    #     serializer = UserWorkoutLogSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #     return Response({'Success':request.data}, status=status.HTTP_200_OK)