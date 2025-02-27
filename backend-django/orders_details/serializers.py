from rest_framework import serializers
from .models import OrderDetails

class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetails
        fields = ['id', 'order', 'plato_nombre', 'cantidad', 'precio_unitario', 'total']
