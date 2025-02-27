from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReservationViewSet
from .views import PublicReservaView

router = DefaultRouter()
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Asegura que esta línea esté
]
router = DefaultRouter()


urlpatterns = [
    path('', include(router.urls)),
    path('public-reservas/', PublicReservaView.as_view(), name='public-reservas'),  # Nueva vista pública
]
