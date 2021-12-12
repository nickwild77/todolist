from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _


class Project(models.Model):
    name = models.CharField(_('Нзвание проекта'), max_length=128)
    url = models.URLField(_('Ссылка на репозиторий'), blank=True)
    user = models.ManyToManyField(get_user_model(), _('Пользователи'))

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = _('Проект')
        verbose_name_plural = _('Проекты')


class ToDo(models.Model):
    project = models.ForeignKey(Project, models.CASCADE, verbose_name='Связанный проект')
    creator = models.ForeignKey(get_user_model(), models.CASCADE, verbose_name='Автор')
    title = models.CharField(_('Нзвание задачи'), max_length=128)
    body = models.TextField(_('Текст задачи'))
    is_active = models.BooleanField(_('Активна'), default=True)
    created = models.DateField(_('Создана'), auto_now_add=True)
    updated = models.DateField(_('Обновлена'), auto_now=True)

    class Meta:
        verbose_name = _('Задача')
        verbose_name_plural = _('Задачи')
