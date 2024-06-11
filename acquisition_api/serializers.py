from rest_framework import serializers
from .models import AdminUnit

class CustomModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminUnit
        fields = '__all__'