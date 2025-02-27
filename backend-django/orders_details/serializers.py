from rest_framework import serializers
from .models import OrderDetails
from menu.models import Plato  # Asegúrate de importar el modelo Plato

class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetails
        fields = ['id', 'order', 'plato', 'cantidad', 'precio_unitario', 'total']
