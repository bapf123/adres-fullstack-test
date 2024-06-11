from rest_framework import viewsets, permissions

from acquisition_api.models import AdminUnit
from acquisition_api.serializers import CustomModelSerializer

class AdminUnitViewSet(viewsets.ModelViewSet):
    queryset = AdminUnit.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CustomModelSerializer
