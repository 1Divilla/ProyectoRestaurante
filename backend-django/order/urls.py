from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PedidoViewSet, PedidoDetailAPIView

router = DefaultRouter()
router.register(r'pedidos', PedidoViewSet, basename='pedido')  # ✅ Agregar basename

urlpatterns = [
    path('', include(router.urls)),
    path('pedidos/<int:pk>/', PedidoDetailAPIView.as_view(), name='pedido-detail'),
]
