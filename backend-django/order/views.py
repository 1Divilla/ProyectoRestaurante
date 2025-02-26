from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Pedido
from .serializers import PedidoSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from order.models import Pedido
from django.shortcuts import get_object_or_404

class PedidoViewSet(viewsets.ModelViewSet):
    """
    API para listar, crear, actualizar y eliminar pedidos.
    """
    queryset = Pedido.objects.all()  # ✅ Agregar queryset para evitar error
    serializer_class = PedidoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """
        Filtra los pedidos:
        - Si el usuario es gerente, ve todos los pedidos.
        - Si el usuario es cliente, solo ve los suyos.
        """
        if self.request.user.rol == "gerente":
            return Pedido.objects.all()
        return Pedido.objects.filter(cliente=self.request.user)

    def destroy(self, request, *args, **kwargs):
        """
        Permite a los gerentes cancelar pedidos.
        """
        pedido = self.get_object()
        if request.user.rol != "gerente":
            return Response({"error": "No tienes permiso para cancelar pedidos"}, status=status.HTTP_403_FORBIDDEN)
        pedido.delete()
        return Response({"message": "Pedido cancelado correctamente"}, status=status.HTTP_200_OK)


class PedidoDetailAPIView(APIView):
    def delete(self, request, pk, *args, **kwargs):
        """
        Eliminar un pedido específico.
        """
        pedido = get_object_or_404(Pedido, pk=pk)
        pedido.delete()
        return Response({"message": "Pedido eliminado correctamente"}, status=status.HTTP_204_NO_CONTENT)
