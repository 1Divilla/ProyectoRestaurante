from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Reserva
from .serializers import ReservaSerializer

class PublicReservaView(generics.ListCreateAPIView):
    queryset = Reserva.objects.all().order_by('-fecha_hora')
    serializer_class = ReservaSerializer
    permission_classes = [AllowAny]
