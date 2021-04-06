from django.db import models

# Create your models here.


class Task(models.Model):

    class Meta:
        db_table = 'task'

    content = models.CharField(max_length=200)
    column = models.CharField(max_length=9)

    def __str__(self):
        return self.content
