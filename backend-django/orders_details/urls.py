from django.urls import path
from .views import OrderDetailsListCreateAPIView, OrderDetailsDetailAPIView

urlpatterns = [
    path('', OrderDetailsListCreateAPIView.as_view(), name='order-details-list-create'),
    path('<int:pk>/', OrderDetailsDetailAPIView.as_view(), name='order-details-detail'),
]
