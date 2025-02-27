from django.contrib import admin
from .models import Reserva

<<<<<<< HEAD
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('mesa', 'nombre_cliente', 'personas', 'fecha_hora')
    list_filter = ('mesa',)  # Puedes filtrar por mesa o cualquier otro campo existente

admin.site.register(Reserva, ReservationAdmin)
=======
@admin.register(Reserva)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre_cliente', 'fecha_hora', 'personas', 'estado')  # Corrección de nombres
    list_filter = ('estado', 'fecha_hora')  # Ahora 'estado' existe en el modelo
    search_fields = ('nombre_cliente', 'estado')  # Eliminado 'cliente__username'
>>>>>>> 4e1ca33e9a1f00c5bffd93e2f41d1cc5ab0c3d32
