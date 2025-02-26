from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .models import Pedido
from .serializers import PedidoSerializer
from rest_framework.response import Response
from order.models import Pedido
from order.serializers import PedidoSerializer
from django.shortcuts import get_object_or_404

class PedidoListCreateAPIView(APIView):
    """
    Vista para listar y crear pedidos.
    """
    permission_classes = [IsAuthenticated]  # Asegurar que el usuario esté autenticado

    def get(self, request, *args, **kwargs):
        """
        Listar pedidos del usuario autenticado.
        """
        pedidos = Pedido.objects.filter(usuario=request.user)  # 🔥 Filtra solo pedidos del usuario actual

class PedidoListCreateAPIView(APIView):
    def get(self, request):
        # Obtener el parámetro cliente_id de la URL
        cliente_id = request.query_params.get('cliente_id', None)

        if cliente_id:
            # Filtrar pedidos por cliente si el parámetro está presente
            pedidos = Pedido.objects.filter(cliente__id=cliente_id)
        else:
            # Obtener todos los pedidos si no se proporciona un cliente_id
            pedidos = Pedido.objects.all()
        
        serializer = PedidoSerializer(pedidos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PedidoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(usuario=request.user)  # 🔥 Asigna automáticamente el usuario autenticado
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PedidoDetailAPIView(APIView):
    """
    Vista para obtener, actualizar y eliminar un pedido específico.
    """
    def get_object(self, pk):
        """
        Obtener un pedido específico o lanzar un error 404 si no existe.
        """
        try:
            return Pedido.objects.get(pk=pk)
        except Pedido.DoesNotExist:
            raise Http404

    def get(self, request, pk, *args, **kwargs):
        """
        Obtener un pedido específico.
        """
        pedido = self.get_object(pk)
        serializer = PedidoSerializer(pedido)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        """
        Actualizar un pedido específico.
        """
        pedido = self.get_object(pk)
        serializer = PedidoSerializer(pedido, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        """
        Eliminar un pedido específico.
        """
        pedido = self.get_object(pk)
        pedido.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)