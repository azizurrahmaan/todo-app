from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    details = models.TextField(blank=True, null=True)
    date = models.DateField()
    from_time = models.TimeField()
    to_time = models.TimeField()
    status = models.CharField(max_length=15, default="INCOMPLETE")

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.date) + ": from " + str(self.from_time) + " to " + str(self.to_time)
