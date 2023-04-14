from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer


class UserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'first_name', 'last_name', 'email',)


class UserSerializerVersionTwo(HyperlinkedModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_active')
