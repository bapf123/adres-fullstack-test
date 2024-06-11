from django.db import models

class AcquisitionStatus(models.TextChoices):
    ENABLED = 'ENABLED', 'Activada'
    DISABLED = 'DISABLED', 'Desactivada'
    DELETED = 'DELETED', 'Eliminada'

class TransactionType(models.TextChoices):
    MODIFIED = 'MODIFIED', 'Modificado'
    CREATED = 'CREATED', 'Creado'
    DELETED = 'DELETED', 'Eliminado'

class AdminUnit(models.Model):
    name = models.CharField(max_length=250)

class Supplier(models.Model):
    name = models.CharField(max_length=250)

class Acquisition(models.Model):
    budget = models.FloatField()
    unit = models.ForeignKey(AdminUnit, on_delete=models.CASCADE)
    acquisition_type = models.CharField(max_length=250)
    quantity = models.IntegerField()
    unit_cost = models.FloatField()
    total_cost = models.FloatField()
    date = models.DateField()
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    docs = models.TextField()
    status = models.CharField(choices = AcquisitionStatus.choices, default=AcquisitionStatus.ENABLED, max_length=250)

class User(models.Model):
    email = models.CharField(max_length=250, unique = True)
    password = models.CharField(max_length=250)
    name = models.CharField(max_length = 250)
    middle_name =  models.CharField(max_length = 250)
    last_name =  models.CharField(max_length = 250)
    id_number = models.IntegerField()

class Transaction(models.Model):
    acquisition = models.ForeignKey(Acquisition, on_delete=models.CASCADE)
    transaction_type = models.CharField(max_length=250, choices = TransactionType)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

