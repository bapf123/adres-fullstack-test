# Generated by Django 5.0.6 on 2024-06-12 01:02

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('acquisition_api', '0003_remove_transaction_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='date',
            field=models.DateField(default=datetime.datetime(2024, 6, 12, 1, 2, 39, 138490, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
    ]