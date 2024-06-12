from rest_framework import viewsets, permissions

from acquisition_api.models import AdminUnit, Supplier, Acquisition, Transaction
from acquisition_api.serializers import AdminUnitSerializer, SupplierSerializer, AcquisitionSerializer, TransactionSerializer

class AdminUnitViewSet(viewsets.ModelViewSet):
    queryset = AdminUnit.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AdminUnitSerializer

class SupplierViewSet(viewsets.ModelViewSet):
    queryset = Supplier.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SupplierSerializer

class AcquisitionViewSet(viewsets.ModelViewSet):
    queryset = Acquisition.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AcquisitionSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TransactionSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        acquisition_id = self.request.query_params.get('acquisition_id')
        if acquisition_id:
            queryset = queryset.filter(acquisition_id=acquisition_id)
        return queryset