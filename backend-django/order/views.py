from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Pedido
from .serializers import PedidoSerializer

class PedidoListCreateAPIView(APIView):
    """
    Vista para listar y crear pedidos.
    """
    def get(self, request, *args, **kwargs):
        """
        Listar todos los pedidos.
        """
        pedidos = Pedido.objects.all()
        serializer = PedidoSerializer(pedidos, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        """
        Crear un nuevo pedido.
        """
        serializer = PedidoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
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
