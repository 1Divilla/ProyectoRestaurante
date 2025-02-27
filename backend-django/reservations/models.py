from django.db import models
from django.contrib.auth.models import User
<<<<<<< HEAD
from users.models import CustomUser
=======
from users.models import CustomUser  # Si realmente usas CustomUser
>>>>>>> 4e1ca33e9a1f00c5bffd93e2f41d1cc5ab0c3d32

class Reserva(models.Model):
    ESTADO_CHOICES = [
        ('Pendiente', 'Pendiente'),
        ('Confirmada', 'Confirmada'),
        ('Cancelada', 'Cancelada'),
    ]

    mesa = models.CharField(max_length=100)
    nombre_cliente = models.CharField(max_length=100)
    personas = models.IntegerField()
    fecha_hora = models.DateTimeField()
    estado = models.CharField(
        max_length=20,
        choices=ESTADO_CHOICES,
        default='Pendiente'
    )

    def __str__(self):
        return f"Reserva en {self.mesa} para {self.personas} personas, cliente: {self.nombre_cliente} el {self.fecha_hora}"
<<<<<<< HEAD
        return f"Reserva de {self.cliente.nombre} el {self.fecha_hora}"
=======
>>>>>>> 4e1ca33e9a1f00c5bffd93e2f41d1cc5ab0c3d32
