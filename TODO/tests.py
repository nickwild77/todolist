from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient

from users.models import User

from .views import ProjectModelViewSet, ToDoModelViewSet
from .models import Project, ToDo


class TestProjectViewSet(TestCase):

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_detail(self):
        project = Project.objects.create(name='Test', repository_link='test.py')
        client = APIClient()
        response = client.get(f'/api/projects/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_admin(self):
        project = Project.objects.create(name='Test', repository_link='test.py', user='Hello')
        client = APIClient()
        user = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
        client.login(username='admin', password='admin123456')
        response = client.put(f'/api/projects/{project.id}/',
                              {'name': 'hello', 'repository_link': 'hello.com', 'user': 'testtest'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        project = Project.objects.get(id=project.id)
        self.assertEqual(project.name, 'hello')
        self.assertEqual(project.repository_link, 'hello.com')
        client.logout()
