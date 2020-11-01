from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/add-task', views.TaskView.as_view(), name='add_task'),
    path('api/edit-task/<int:task_id>', views.TaskView.as_view(), name='edit_task'),
    path('api/list-tasks', views.TaskView.as_view(), name='list_tasks'),
    path('api/toggle-tasks', views.ToggleCompleteTasksView.as_view(), name='toggle_tasks'),
    path('api/delete-tasks', views.DeleteTasksView.as_view(), name='delete_tasks'),
    re_path('^api/search-tasks/(?P<date>\d{4}-\d{2}-\d{2})$', views.SearchTaskView.as_view(), name='search_tasks'),
    
]