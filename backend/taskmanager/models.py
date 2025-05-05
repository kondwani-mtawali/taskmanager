from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# Define the Reminder model.
class Tasks(models.Model):
    title = models.CharField(max_length=255)  # Title of the reminder
    description = models.TextField(blank=True, null=True)  # Optional description
    task_due = models.DateTimeField()  # Date and time when the reminder should trigger
    task_is_complete = models.BooleanField(default=False)
    task_created_at = models.DateTimeField(auto_now_add=True)

    PRIORITY_LEVELS = [(i, str(i)) for i in range(1, 6)] 

    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks')
    category = models.CharField(max_length=100, blank=True, null=True)
    priority = models.IntegerField(choices=PRIORITY_LEVELS, default=3)
    attachment = models.FileField(upload_to='task_files/', blank=True, null=True)
    external_link = models.URLField(blank=True, null=True)

class TaskGroup(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    leader = models.ForeignKey(User, on_delete=models.CASCADE, related_name='led_groups')
    participants = models.ManyToManyField(User, related_name='task_groups')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


def __str__(self):
    return self.title  # Return the title when the Reminder object is printed.