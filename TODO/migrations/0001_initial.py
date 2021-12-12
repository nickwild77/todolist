# Generated by Django 4.0 on 2021-12-12 16:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0002_alter_user_options'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='Нзвание проекта')),
                ('url', models.URLField(blank=True, verbose_name='Ссылка на репозиторий')),
                ('user', models.ManyToManyField(related_name='Пользователи', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Проект',
                'verbose_name_plural': 'Проекты',
            },
        ),
        migrations.CreateModel(
            name='ToDo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Нзвание задачи')),
                ('body', models.TextField(verbose_name='Текст задачи')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активна')),
                ('created', models.DateField(auto_now_add=True, verbose_name='Создана')),
                ('updated', models.DateField(auto_now=True, verbose_name='Обновлена')),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user', verbose_name='Автор')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='TODO.project', verbose_name='Связанный проект')),
            ],
            options={
                'verbose_name': 'Задача',
                'verbose_name_plural': 'Задачи',
            },
        ),
    ]
