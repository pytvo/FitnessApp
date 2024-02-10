from django.urls import path
from . import views

urlpatterns = [
    path('', views.WelcomeView.as_view()),
    path('accounts/activation/<uid>/<token>/', views.ActivationView.as_view({'get':'activation'})),
    path('user/feedback/', views.UserFeedbackViewset.as_view({'get':'get',
                                                              'post':'create'})),
    path('user/steps/', views.StepsCountViewSet.as_view({'get':'get',
                                                         'post':'create'})),
    path('user/nutritions/', views.NutritionLogViewSet.as_view({'get':'get',
                                                                'post':'create'})),
    path('muscle-groups/', views.MuscleGroupAPIView.as_view()),
    path('exercises/', views.ExerciseAPIView.as_view())
]