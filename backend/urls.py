from django.urls import path, include
from rest_framework import routers

from . import views

# create router for backend api
apiRouter = routers.DefaultRouter()
apiRouter.register('task', views.TaskViewset)

# urls provided by the backend
urlpatterns = [
    path('api/', include(apiRouter.urls)),
    path('', views.index, name='index')
]
