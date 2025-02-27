from django.urls import path, include
from rest_framework.routers import DefaultRouter
<<<<<<< HEAD
from .views import ReservationViewSet

router = DefaultRouter()
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Asegura que esta línea esté
]
=======
from .views import ReservaViewSet

router = DefaultRouter()
router.register(r'reservas', ReservaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
>>>>>>> 785028fe7c610d5980e0c4b1526366574cb85d57
