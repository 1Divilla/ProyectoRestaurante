<<<<<<< HEAD
from rest_framework import generics
from rest_framework.permissions import AllowAny
=======
from rest_framework import viewsets
<<<<<<< HEAD
from .models import Reservation
from .serializers import ReservationSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all().order_by('-fecha_hora')
    serializer_class = ReservationSerializer
=======
from rest_framework.permissions import IsAuthenticated
>>>>>>> 872a4b224bc9ec4a0c8eb7e9aa0973bef1e07a4e
from .models import Reserva
from .serializers import ReservaSerializer

class PublicReservaView(generics.ListCreateAPIView):
    queryset = Reserva.objects.all().order_by('-fecha_hora')
    serializer_class = ReservaSerializer
<<<<<<< HEAD
    permission_classes = [AllowAny]
=======
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(cliente=self.request.user)
>>>>>>> 785028fe7c610d5980e0c4b1526366574cb85d57
>>>>>>> 872a4b224bc9ec4a0c8eb7e9aa0973bef1e07a4e
