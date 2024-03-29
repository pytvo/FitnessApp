from django.urls import path
from . import views

urlpatterns = [
    path('accounts/activation/<uid>/<token>/', views.ActivationView.as_view({'get':'activation'})),
    path('user/feedback/', views.UserFeedbackViewset.as_view({'get':'get',
                                                              'post':'create'})),
    path('user/steps/', views.StepsCountViewSet.as_view({'get':'get',
                                                         'post':'create'})),
    path('user/nutritions/', views.NutritionLogViewSet.as_view({'get':'get',
                                                                'post':'create'})),
    path('user/userworkout-log/', views.UserWorkoutLogView.as_view({'get':'get', 'post':'post'})),
    path('muscle-groups/', views.MuscleGroupAPIView.as_view()),
    path('exercises/', views.ExerciseAPIView.as_view()),
    path('user/exercise-set/', views.ExerciseSetView.as_view({'get':'get'})) # later: {'post':'post'}
]