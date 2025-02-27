from rest_framework import serializers
from .models import OrderDetails

class OrderDetailsSerializer(serializers.ModelSerializer):
    plato_nombre = serializers.CharField(source="plato.nombre", read_only=True)  # ✅ Devuelve el nombre del plato

    class Meta:
        model = OrderDetails
        fields = ['order', 'plato', 'plato_nombre', 'cantidad', 'precio_unitario', 'total']
