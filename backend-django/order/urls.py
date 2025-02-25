from django.urls import path
from .views import PedidoListCreateAPIView

urlpatterns = [
    path('api/pedidos/', PedidoListCreateAPIView.as_view(), name='pedido-list-create'),
]