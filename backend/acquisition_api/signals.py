from django.db.models.signals import post_save
from django.dispatch import receiver
from datetime import datetime


from .models import Acquisition, TransactionType, Transaction


@receiver(post_save, sender=Acquisition)
def crear_log(sender, instance, created, **kwargs):
    Transaction.objects.create(
        acquisition_id = instance.id,
        transaction_type = TransactionType.DELETED if instance.status == TransactionType.DELETED else TransactionType.CREATED if created else TransactionType.MODIFIED,
        date = datetime.now()
    )
