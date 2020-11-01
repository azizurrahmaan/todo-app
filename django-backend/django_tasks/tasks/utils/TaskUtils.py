from tasks.models import Task
from django.http import Http404

def get_object(task_id):
    try:
        return Task.objects.get(id=task_id)
    except Task.DoesNotExist:
        raise Http404


def get_all_tasks(user):
    return Task.objects.filter(user=user)


def search_tasks(user, date):
    return Task.objects.filter(user=user, date=date)


def update_status(task, status):
    task.status = status
    task.save()


def change_task_status(task_ids):
    tasks = Task.objects.filter(id__in=task_ids)
    for task in tasks:
        if task.status == "INCOMPLETE":
            update_status(task, "COMPLETED")
        else:
            update_status(task, "INCOMPLETE")


def delete_tasks(task_ids):
    print(Task.objects.filter(id__in=task_ids))
    Task.objects.filter(id__in=task_ids).delete()