from rest_framework.serializers import ModelSerializer, ValidationError
from rest_framework import fields

from tasks.models import Task

class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = ('__all__')

    def validate(self, data):
        from_time =  data["from_time"]
        to_time = data["to_time"]
        if from_time>to_time:
            raise ValidationError("\"To Time\" must be after \"From Time\".")
        return data