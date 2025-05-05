from rest_framework import serializers
from .models import Tasks, TaskGroup
from django.contrib.auth.models import User

class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = '__all__'

class TaskGroupSerializer(serializers.ModelSerializer):
    leader = serializers.ReadOnlyField(source='leader.username')
    participants = serializers.SlugRelatedField(
        many=True,
        slug_field='username',
        queryset=User.objects.all()
    )

    class Meta:
        model = TaskGroup
        fields = '__all__'