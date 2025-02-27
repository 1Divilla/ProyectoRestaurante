from rest_framework import serializers
<<<<<<< HEAD
=======
from .models import Reserva

class ReservationSerializer(serializers.ModelSerializer):
    cliente_nombre = serializers.CharField(source='cliente.username', read_only=True)
    
    class Meta:
        model = Reserva
        fields = ['id', 'cliente', 'cliente_nombre', 'fecha_hora', 'numero_personas', 'comentarios', 'estado']
>>>>>>> 4e1ca33e9a1f00c5bffd93e2f41d1cc5ab0c3d32
from .models import Reserva

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = ['mesa', 'nombre_cliente', 'personas', 'fecha_hora']
<<<<<<< HEAD
=======

>>>>>>> 4e1ca33e9a1f00c5bffd93e2f41d1cc5ab0c3d32
        fields = '__all__'

