# Generated by Django 5.2 on 2025-05-06 03:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taskmanager', '0008_alter_taskgroup_leader'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='taskgroup',
            name='group_tasks',
        ),
        migrations.RemoveField(
            model_name='tasks',
            name='task_group',
        ),
        migrations.AddField(
            model_name='tasks',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tasks', to='taskmanager.taskgroup'),
        ),
    ]
