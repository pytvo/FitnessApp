from django.urls import path
from . import views

urlpatterns = [
    path('', views.SomethingView.as_view())
]