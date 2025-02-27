from django.db import models
<<<<<<< HEAD
=======
<<<<<<< HEAD
from django.contrib.auth.models import User

class Reservation(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pendiente'),
        ('CONFIRMED', 'Confirmada'),
        ('CANCELLED', 'Cancelada'),
    ]

    cliente = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha_hora = models.DateTimeField()
    numero_personas = models.PositiveIntegerField()
    comentarios = models.TextField(blank=True, null=True)
    estado = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING')

    def __str__(self):
        return f"Reserva {self.id} - {self.cliente.username} ({self.fecha_hora})"
=======
from users.models import CustomUser
>>>>>>> 872a4b224bc9ec4a0c8eb7e9aa0973bef1e07a4e

class Reserva(models.Model):
    mesa = models.CharField(max_length=100)
    nombre_cliente = models.CharField(max_length=100)
    personas = models.IntegerField()
    fecha_hora = models.DateTimeField()

    def __str__(self):
<<<<<<< HEAD
        return f"Reserva en {self.mesa} para {self.personas} personas, cliente: {self.nombre_cliente} el {self.fecha_hora}"
=======
        return f"Reserva de {self.cliente.nombre} el {self.fecha_hora}"
>>>>>>> 785028fe7c610d5980e0c4b1526366574cb85d57
>>>>>>> 872a4b224bc9ec4a0c8eb7e9aa0973bef1e07a4e
