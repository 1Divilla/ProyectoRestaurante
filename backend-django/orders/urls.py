from django.urls import path
from .views import OrderListCreateAPIView, OrderDetailAPIView, OrderDetailsAPIView

urlpatterns = [
    path('api/orders/', OrderListCreateAPIView.as_view(), name='order-list-create')
]
