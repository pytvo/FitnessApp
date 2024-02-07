from django.urls import path
from . import views

urlpatterns = [
    path('', views.WelcomeView.as_view()),
    path('accounts/activation/<uid>/<token>/', views.ActivationView.as_view({'get':'activation'})),
]