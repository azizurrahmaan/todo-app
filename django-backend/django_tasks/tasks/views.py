from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from tasks.serializers import TaskSerializer
from tasks.models import Task

from tasks.utils import TaskUtils

class TaskView(APIView):
    permission_classes = [IsAuthenticated]


    def post(self, request, format=None):
        data = request.data.copy()
        data["user"] = request.user.id
        task_serializer = TaskSerializer(data=data)
        if not task_serializer.is_valid():
            return Response(task_serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        task = task_serializer.save()
        return Response({'task': task_serializer.data}, status=status.HTTP_201_CREATED)


    def put(self, request, task_id, format=None):
        try:
            task = TaskUtils.get_object(task_id)
        except Exception as error:
            return Response({'error': "Task object does not exist"}, status=status.HTTP_404_NOT_FOUND)
        data = request.data.copy()
        data["user"] = request.user.id
        task_serializer = TaskSerializer(task, data=data)
        if not task_serializer.is_valid():
            return Response(task_serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        task = task_serializer.save()
        return Response({'task': task_serializer.data}, status=status.HTTP_200_OK)


    def get(self, request, format=None):
        tasks = TaskUtils.get_all_tasks(request.user)
        return Response({'tasks': TaskSerializer(tasks, many=True).data}, status=status.HTTP_200_OK)


class SearchTaskView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, date, format=None):
        tasks = TaskUtils.search_tasks(request.user, date)
        return Response({'tasks': TaskSerializer(tasks, many=True).data}, status=status.HTTP_200_OK)


class ToggleCompleteTasksView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, format=None):
        task_ids = request.data.get('taskIds')
        TaskUtils.change_task_status(task_ids)
        return Response({'isToggled': True}, status=status.HTTP_200_OK)


class DeleteTasksView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        task_ids = request.data.get('taskIds')
        TaskUtils.delete_tasks(task_ids)
        return Response({'isDeleted': True}, status=status.HTTP_200_OK)


