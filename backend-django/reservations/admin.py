from django.contrib import admin
from .models import Reserva

@admin.register(Reserva)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre_cliente', 'fecha_hora', 'personas', 'estado')  # Corrección de nombres
    list_filter = ('estado', 'fecha_hora')  # Ahora 'estado' existe en el modelo
    search_fields = ('nombre_cliente', 'estado')  # Eliminado 'cliente__username'
