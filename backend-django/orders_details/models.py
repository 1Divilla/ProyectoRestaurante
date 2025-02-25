from django.db import models
from orders.models import Order  
from menu.models import Plato  

class OrderDetails(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="order_details")  # Nombre único
    plato = models.ForeignKey(Plato, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()  # No permite valores negativos
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    total = models.DecimalField(max_digits=10, decimal_places=2, editable=False)  # No editable

    def save(self, *args, **kwargs):
        """Calcular el total automáticamente antes de guardar."""
        self.total = self.cantidad * self.precio_unitario
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Order {self.order.id} - {self.plato.nombre} x {self.cantidad}"
