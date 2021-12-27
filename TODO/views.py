from rest_framework.viewsets import ModelViewSet

from TODO.models import Project, ToDo
from TODO.serializers import ProjectSerializer, ToDoSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
