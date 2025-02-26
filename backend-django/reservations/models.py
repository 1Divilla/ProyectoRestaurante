from django.db import models
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
