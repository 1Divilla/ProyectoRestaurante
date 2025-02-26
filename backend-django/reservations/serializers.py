from rest_framework import serializers
from .models import Reserva
from users.serializers import CustomUserSerializer

class ReservaSerializer(serializers.ModelSerializer):
    cliente = CustomUserSerializer(read_only=True)

    class Meta:
        model = Reserva
        fields = '__all__'
