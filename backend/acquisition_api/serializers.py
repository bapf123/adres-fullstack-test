from rest_framework import serializers
from .models import AdminUnit, Supplier, Acquisition, Transaction

class AdminUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminUnit
        fields = '__all__'

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'

class AcquisitionListSerializer(serializers.ModelSerializer):
    supplier_name = serializers.CharField(source='supplier.name')
    unit_name = serializers.CharField(source='unit.name')
    class Meta:
        model = Acquisition
        fields = '__all__'

class AcquisitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acquisition
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'