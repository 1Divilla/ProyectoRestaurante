from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .models import Reserva
from .serializers import ReservationSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Reserva
from .serializers import ReservaSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all().order_by('-fecha_hora')
    serializer_class = ReservationSerializer
    
class PublicReservaView(generics.ListCreateAPIView):
    queryset = Reserva.objects.all().order_by('-fecha_hora')
    serializer_class = ReservaSerializer
    permission_classes = [AllowAny]
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(cliente=self.request.user)

