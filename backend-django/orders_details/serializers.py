from rest_framework import serializers
from .models import OrderDetails

class OrderDetailsSerializer(serializers.ModelSerializer):
<<<<<<< HEAD
    plato_nombre = serializers.CharField(source="plato.nombre", read_only=True)  # ✅ Devuelve el nombre del plato

    class Meta:
        model = OrderDetails
        fields = ['order', 'plato', 'plato_nombre', 'cantidad', 'precio_unitario', 'total']
=======
    class Meta:
        model = OrderDetails
        fields = ['id', 'order', 'plato_nombre', 'cantidad', 'precio_unitario', 'total']
>>>>>>> 872a4b224bc9ec4a0c8eb7e9aa0973bef1e07a4e
