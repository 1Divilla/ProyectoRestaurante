from rest_framework import serializers
from .models import OrderDetails
from menu.models import Plato  # Asegúrate de importar el modelo Plato

class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetails
        fields = ['id', 'order', 'plato', 'cantidad', 'precio_unitario', 'total']
    plato_nombre = serializers.CharField(source="plato.nombre", read_only=True)  # ✅ Devuelve el nombre del plato

    class Meta:
        model = OrderDetails
        fields = ['order', 'plato', 'plato_nombre', 'cantidad', 'precio_unitario', 'total']
    class Meta:
        model = OrderDetails
        fields = ['id', 'order', 'plato_nombre', 'cantidad', 'precio_unitario', 'total']
