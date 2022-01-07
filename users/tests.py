from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APITestCase

from .models import User
from .views import CustomUserModelViewSet


class TestUserViewSet(APITestCase):

    def setUp(self) -> None:
        self.admin = User.objects.create_superuser(username='test_superuser', email='test@test.py', password='123')

    def test_get_list_of_users(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        force_authenticate(request, user=self.admin)
        view = CustomUserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_client_get_users_list(self):
        self.client.login(username='test_superuser', password='123')
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response = self.client.post('/api/users/', {
            'username': 'hellotest',
            'password': '123',
            'email': 'hello@test.py'
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        self.client.logout()
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
