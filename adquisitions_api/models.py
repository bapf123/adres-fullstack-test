from django.db import models

# Create your models here.

class AdquisitionStatus(models.TextChoices):
    ENABLED = 'ENABLED', 'Activada'
    DISABLED = 'DISABLED', 'Desactivada'

class AdminUnit(models.Model):
    name = models.CharField(max_length=250)

class Supplier(models.Model):
    name = models.CharField(max_length=250)

class Adquisition(models.Model):
    budget = models.FloatField()
    unit = models.ForeignKey(AdminUnit, on_delete=models.CASCADE)
    adquisition_type = models.CharField(max_length=250)
    quantity = models.IntegerField()
    unit_cost = models.FloatField()
    total_cost = models.FloatField()
    date = models.DateField()
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    docs = models.TextField()
    status = models.CharField(choices = AdquisitionStatus.choices, default=AdquisitionStatus.ENABLED, max_length=250)

