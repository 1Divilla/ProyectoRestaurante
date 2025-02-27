from django.contrib import admin
from .models import Reservation

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('id', 'cliente', 'fecha_hora', 'numero_personas', 'estado')
    list_filter = ('estado', 'fecha_hora')
    search_fields = ('cliente__username', 'estado')
