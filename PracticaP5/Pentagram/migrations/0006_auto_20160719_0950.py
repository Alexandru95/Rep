# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-19 06:50
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Pentagram', '0005_auto_20160718_1333'),
    ]

    operations = [
        migrations.CreateModel(
            name='Likes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.RemoveField(
            model_name='photo',
            name='counter_like',
        ),
        migrations.AddField(
            model_name='likes',
            name='photo_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Pentagram.Photo'),
        ),
        migrations.AddField(
            model_name='likes',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]