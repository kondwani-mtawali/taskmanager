from rest_framework.viewsets import ModelViewSet
from taskmanager import models, serializers
from rest_framework import viewsets, permissions
from .models import Tasks, TaskGroup
from .serializers import TasksSerializer, TaskGroupSerializer


class TasksViewSet(ModelViewSet):
    queryset = models.Tasks.objects.all()
    serializer_class = serializers.TasksSerializer

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TasksSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Tasks.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class TaskGroupViewSet(viewsets.ModelViewSet):
    serializer_class = TaskGroupSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return TaskGroup.objects.filter(participants=self.request.user)

    def perform_create(self, serializer):
        serializer.save(leader=self.request.user)