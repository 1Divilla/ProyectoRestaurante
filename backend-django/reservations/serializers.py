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
from users.serializers import CustomUserSerializer

class ReservaSerializer(serializers.ModelSerializer):
    cliente = CustomUserSerializer(read_only=True)

    class Meta:
        model = Reserva
        fields = '__all__'
>>>>>>> 785028fe7c610d5980e0c4b1526366574cb85d57
