from rest_framework import serializers
from .models import OrderDetails

class OrderDetailsSerializer(serializers.ModelSerializer):
    cantidad = serializers.IntegerField(min_value=1)  # No permite valores menores a 1
    total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)  # Solo lectura

    class Meta:
        model = OrderDetails
        fields = ['cantidad', 'precio_unitario', 'total']  # Ocultamos order y plato
