from django.urls import path, include
from rest_framework.routers import DefaultRouter
<<<<<<< HEAD
from .views import PublicReservaView
=======
<<<<<<< HEAD
from .views import ReservationViewSet

router = DefaultRouter()
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Asegura que esta línea esté
]
=======
from .views import ReservaViewSet
>>>>>>> 872a4b224bc9ec4a0c8eb7e9aa0973bef1e07a4e

router = DefaultRouter()


urlpatterns = [
    path('', include(router.urls)),
    path('public-reservas/', PublicReservaView.as_view(), name='public-reservas'),  # Nueva vista pública
]
>>>>>>> 785028fe7c610d5980e0c4b1526366574cb85d57
