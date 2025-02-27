from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
class Reservation(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pendiente'),
        ('CONFIRMED', 'Confirmada'),
        ('CANCELLED', 'Cancelada'),
    ]

    cliente = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    fecha_hora = models.DateTimeField()
    numero_personas = models.PositiveIntegerField()
    comentarios = models.TextField(blank=True, null=True)
    estado = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING')

    def __str__(self):
        return f"Reserva {self.id} - {self.cliente.username} ({self.fecha_hora})"

from users.models import CustomUser

class Reserva(models.Model):
    cliente = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="reservas")
    fecha_hora = models.DateTimeField()
    num_personas = models.PositiveIntegerField()
    estado = models.CharField(max_length=20, choices=[
        ('pendiente', 'Pendiente'),
        ('confirmada', 'Confirmada'),
        ('cancelada', 'Cancelada'),
    ], default='pendiente')
    comentarios = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Reserva de {self.cliente.nombre} el {self.fecha_hora}"
