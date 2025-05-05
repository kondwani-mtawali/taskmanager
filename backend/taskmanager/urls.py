from django.urls import path, include
from . import views
from rest_framework import routers
from taskmanager import views

router = routers.DefaultRouter()
router.register(r"tasks", views.TasksViewSet, basename='tasks')
router.register(r"groups", views.TaskGroupViewSet, basename='groups')
urlpatterns = [
    path('', include(router.urls)),
]