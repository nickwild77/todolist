from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string


class Command(BaseCommand):
    help = 'Автоматическое создание пользователя'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int, help='Задает колличество создаваемых пользователей')
        parser.add_argument('-p', '--prefix', type=str, help='Опеределяет префикс создаваемого пользователя')
        parser.add_argument('-a', '--admin', action='store_true', help='Создание суперпользователя')

    def handle(self, *args, **kwargs):
        total = kwargs['total']
        prefix = kwargs['prefix']
        admin = kwargs['admin']

        for i in range(total):
            if prefix:
                username = '{prefix}_{random_string}'.format(prefix=prefix, random_string=get_random_string(length=5))
            else:
                username = get_random_string(length=5)

            if admin:
                get_user_model().objects.create_superuser(username=username, email=f'{username}@admin.py',
                                                          password='123')
            else:
                get_user_model().objects.create_user(username=username, email=f'{username}@user.py', password='123')
