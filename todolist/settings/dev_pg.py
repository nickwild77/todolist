from .dev import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'todolist',
        'USER': 'nickwild',
        'PASSWORD': '123',
        'HOST': '127.0.0.1',
        'PORT': '54321',
    }
}
