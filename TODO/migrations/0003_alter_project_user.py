# Generated by Django 4.0 on 2022-01-22 16:10

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('TODO', '0002_rename_url_project_repository_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='user',
            field=models.ManyToManyField(related_name='User', to=settings.AUTH_USER_MODEL),
        ),
    ]
