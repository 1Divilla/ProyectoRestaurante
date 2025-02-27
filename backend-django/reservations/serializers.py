from rest_framework import serializers
from .models import Reserva

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = ['mesa', 'nombre_cliente', 'personas', 'fecha_hora']
        fields = '__all__'

