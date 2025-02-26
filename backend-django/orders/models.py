from django.db import models
from django.contrib.auth.models import User
from menu.models import Plato  # Importamos el modelo correcto

class Order(models.Model):
    ESTADO_CHOICES = [
        ('pending', 'Pending'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered')
    ]

    cliente = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")  # Agregamos related_name
    fecha_hora = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='pending')
    direccion_envio = models.TextField()

    def __str__(self):
        return f"Order {self.id} - Customer {self.cliente.username}"

class OrderDetails(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="details")
    plato = models.ForeignKey(Plato, on_delete=models.CASCADE, related_name="order_details_orders")  # Agregamos related_name único
    cantidad = models.PositiveIntegerField()
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    total = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        self.total = self.cantidad * self.precio_unitario
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Order {self.order.id} - {self.plato.nombre} x {self.cantidad}"
