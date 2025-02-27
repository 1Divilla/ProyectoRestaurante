from rest_framework import generics
from .models import OrderDetails
from .serializers import OrderDetailsSerializer
from rest_framework.permissions import AllowAny  # ✅ Permitir acceso sin autenticación
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

class OrderDetailsPublicCreateAPIView(APIView):
    permission_classes = [AllowAny]  # ✅ Permitir acceso sin autenticación

    def post(self, request, *args, **kwargs):
        """
        Crea un nuevo detalle de pedido sin necesidad de autenticación.
        """
        serializer = OrderDetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class OrderDetailsPublicAPIView(APIView):
    permission_classes = [AllowAny]  # ✅ Permitir acceso sin autenticación

    def get(self, request, order_id, *args, **kwargs):
        """
        Obtiene todos los detalles de un pedido específico sin necesidad de autenticación.
        """
        detalles = OrderDetails.objects.filter(order_id=order_id)  # Filtrar por pedido
        if not detalles.exists():
            return Response({"error": "No se encontraron detalles para este pedido"}, status=status.HTTP_404_NOT_FOUND)

        serializer = OrderDetailsSerializer(detalles, many=True)  # Serializar múltiples detalles
        return Response(serializer.data, status=status.HTTP_200_OK)


class OrderDetailsListCreateAPIView(generics.ListCreateAPIView):
    """Listar todos los detalles de pedidos o crear uno nuevo"""
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer

class OrderDetailsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """Obtener, actualizar o eliminar un detalle de pedido específico"""
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer

class OrderDetailsPublicRetrieveAPIView(APIView):
    permission_classes = [AllowAny]  # ✅ Acceso sin autenticación

    def get(self, request, order_id, *args, **kwargs):
        """
        Obtener los detalles de un pedido con el nombre del plato.
        """
        detalles = OrderDetails.objects.filter(order_id=order_id)
        serializer = OrderDetailsSerializer(detalles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)