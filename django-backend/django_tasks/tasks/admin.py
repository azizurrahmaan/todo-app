from django.contrib import admin
from tasks.models import Task

class TaskModelAdmin(admin.ModelAdmin):
    list_display = ['date', 'from_time', 'to_time', 'details', 'status']

admin.site.register(Task, TaskModelAdmin)
