from django.contrib.auth import get_user_model
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from users.serializers import UserSerializer


# class UserModelViewSet(ModelViewSet):
#     queryset = get_user_model().objects.all()
#     serializer_class = UserSerializer


class CustomUserModelViewSet(ListModelMixin, RetrieveModelMixin,
                             UpdateModelMixin, GenericViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
