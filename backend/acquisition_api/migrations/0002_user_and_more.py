# Generated by Django 5.0.6 on 2024-06-11 15:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('acquisition_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=250, unique=True)),
                ('password', models.CharField(max_length=250)),
                ('name', models.CharField(max_length=250)),
                ('middle_name', models.CharField(max_length=250)),
                ('last_name', models.CharField(max_length=250)),
                ('id_number', models.IntegerField()),
            ],
        ),
        migrations.RenameField(
            model_name='acquisition',
            old_name='Acquisition_type',
            new_name='acquisition_type',
        ),
        migrations.AlterField(
            model_name='acquisition',
            name='status',
            field=models.CharField(choices=[('ENABLED', 'Activada'), ('DISABLED', 'Desactivada'), ('DELETED', 'Eliminada')], default='ENABLED', max_length=250),
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('transaction_type', models.CharField(choices=[('MODIFIED', 'Modificado'), ('CREATED', 'Creado'), ('DELETED', 'Eliminado')], max_length=250)),
                ('acquisition', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='acquisition_api.acquisition')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='acquisition_api.user')),
            ],
        ),
    ]
