from django.db import models

class AcquisitionStatus(models.TextChoices):
    ENABLED = 'ENABLED', 'Activada'
    DISABLED = 'DISABLED', 'Desactivada'

class AdminUnit(models.Model):
    name = models.CharField(max_length=250)

class Supplier(models.Model):
    name = models.CharField(max_length=250)

class Acquisition(models.Model):
    budget = models.FloatField()
    unit = models.ForeignKey(AdminUnit, on_delete=models.CASCADE)
    Acquisition_type = models.CharField(max_length=250)
    quantity = models.IntegerField()
    unit_cost = models.FloatField()
    total_cost = models.FloatField()
    date = models.DateField()
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    docs = models.TextField()
    status = models.CharField(choices = AcquisitionStatus.choices, default=AcquisitionStatus.ENABLED, max_length=250)

