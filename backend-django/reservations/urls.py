from django.urls import path, include
from rest_framework.routers import DefaultRouter
<<<<<<< HEAD
from .views import PublicReservaView

=======
from .views import ReservationViewSet
from .views import PublicReservaView

router = DefaultRouter()
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Asegura que esta línea esté
]
>>>>>>> 4e1ca33e9a1f00c5bffd93e2f41d1cc5ab0c3d32
router = DefaultRouter()


urlpatterns = [
    path('', include(router.urls)),
    path('public-reservas/', PublicReservaView.as_view(), name='public-reservas'),  # Nueva vista pública
]
