from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReservationViewSet

router = DefaultRouter()
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Asegura que esta línea esté
]
from .views import ReservaViewSet

router = DefaultRouter()
router.register(r'reservas', ReservaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
