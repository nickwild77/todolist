from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination

from TODO.filters import ProjectViewFilter, ToDoViewFilter
from TODO.models import Project, ToDo
from TODO.serializers import ProjectSerializer, ToDoSerializer


class PageNumberPaginationLimit10(PageNumberPagination):
    page_size = 10


class PageNumberPaginationLimit20(PageNumberPagination):
    page_size = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = PageNumberPaginationLimit10
    filterset_class = ProjectViewFilter


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    pagination_class = PageNumberPaginationLimit20
    filterset_class = ToDoViewFilter

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()
