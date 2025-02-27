from rest_framework import serializers
<<<<<<< HEAD
from .models import Reservation

class ReservationSerializer(serializers.ModelSerializer):
    cliente_nombre = serializers.CharField(source='cliente.username', read_only=True)
    
    class Meta:
        model = Reservation
        fields = ['id', 'cliente', 'cliente_nombre', 'fecha_hora', 'numero_personas', 'comentarios', 'estado']
=======
from .models import Reserva

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
<<<<<<< HEAD
        fields = ['mesa', 'nombre_cliente', 'personas', 'fecha_hora']
=======
        fields = '__all__'
>>>>>>> 785028fe7c610d5980e0c4b1526366574cb85d57
>>>>>>> 872a4b224bc9ec4a0c8eb7e9aa0973bef1e07a4e
