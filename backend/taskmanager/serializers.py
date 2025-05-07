#serializers.py
#Kondwani Mtawali
#Serializers used to convert instances of Tasks and Groups into JSON
#Controls how data is structured in requests and responses

from rest_framework import serializers, viewsets
from .models import Tasks, TaskGroup
from django.contrib.auth.models import User

class TasksSerializer(serializers.ModelSerializer):
    """
    Task Model Serializer
    - Converts all fields of a Task into JSON
    """
    class Meta:
        model = Tasks
        fields = '__all__'

class TaskGroupSerializer(serializers.ModelSerializer):
    """
    Serializer for TaskGroup
    - Converts all fields of model into JSON
    """    
    class Meta:
        model = TaskGroup
        fields = '__all__'

    