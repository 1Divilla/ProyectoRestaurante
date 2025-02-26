from rest_framework import generics
from .models import OrderDetails
from .serializers import OrderDetailsSerializer

class OrderDetailsListCreateAPIView(generics.ListCreateAPIView):
    """Listar todos los detalles de pedidos o crear uno nuevo"""
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer

class OrderDetailsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """Obtener, actualizar o eliminar un detalle de pedido específico"""
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer
