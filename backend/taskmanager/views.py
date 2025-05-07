# views.py
# Kondwani Mtawali
# Defines viewsets used by the front end in React to intereact with tasks and groups

from rest_framework.viewsets import ModelViewSet
from taskmanager import models
from rest_framework import viewsets, permissions
from .models import Tasks, TaskGroup
from .serializers import TasksSerializer, TaskGroupSerializer

class TaskViewSet(viewsets.ModelViewSet):
    """
    Viewset for handling Task creation, editing, and deletion
    - No user authentication implemented
    - 
    """
    serializer_class = TasksSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Tasks.objects.all() #Returns all tasks

    def perform_create(self, serializer):
        default_user = User.objects.first() #Defaults to first user*(null is allowed in model for now)
        serializer.save(owner=default_user)

class TaskGroupViewSet(viewsets.ModelViewSet):
    """
    ViewSet for managing Task Groups
    - Used for front end functions including being able to view,create, and delete groups
    """
    queryset = TaskGroup.objects.all()
    serializer_class = TaskGroupSerializer
    queryset = models.TaskGroup.objects.all()
