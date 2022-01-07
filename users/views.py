from django.contrib.auth import get_user_model
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin, CreateModelMixin
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
from rest_framework.viewsets import GenericViewSet

from users.serializers import UserSerializer


class CustomUserModelViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin,
                             UpdateModelMixin, GenericViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
