from rest_framework import viewsets, permissions

from acquisition_api.models import AdminUnit, Supplier, Acquisition
from acquisition_api.serializers import AdminUnitSerializer, SupplierSerializer, AcquisitionSerializer

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
