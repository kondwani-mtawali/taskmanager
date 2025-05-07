#models.py 
#Kondwani Mtawali
#Models TaskGroup and Tasks defined


from django.db import models
from django.contrib.auth.models import User

class TaskGroup(models.Model):
    """
    Task Group
    - Includes, name description, leader(group owner), participants, and creation date
    - Leader has blank set to null for functionality purposes currently
    - Participants are just inputted strings for functionality purposes
    """
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    leader = models.ForeignKey(User, on_delete=models.CASCADE, max_length=50, blank=True, null=True) #Optional for functionality(blank/null = true for now)
    participants = models.TextField(help_text="Comma-separated list of participants")
    group_tasks = models.TextField(help_text="Comma-separated list of tasks", blank=True,null=True )
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class Tasks(models.Model):
    """
    Tasks
    - Includes, title, description, due date, completion check, priority levels, owner, categories, 
    prioritization, attachments(including links), and group
    """
    title = models.CharField(max_length=255)  # Title of the Tasks
    description = models.TextField(blank=True, null=True)  # Optional description
    task_due = models.DateTimeField()  # Date and time when the Tasks should trigger
    task_is_complete = models.BooleanField(default=False) # Completion upone creation is always set to false
    task_created_at = models.DateTimeField(auto_now_add=True)
    PRIORITY_LEVELS = [(i, str(i)) for i in range(1, 6)] # Range from 1 to 5 for priority component
    priority = models.IntegerField(choices=PRIORITY_LEVELS, default=3) # Uses defined constant above(1 to 5)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks', null=True, blank=True)
    category = models.CharField(max_length=100, blank=True, null=True) # Users can self declare categories
    attachment = models.FileField(upload_to='task_files/', blank=True, null=True) # Allows user to input files
    external_link = models.URLField(blank=True, null=True) # Allows users to insert links

    def __str__(self):
        return self.title  # Return the title when the Task object is printed.


    


