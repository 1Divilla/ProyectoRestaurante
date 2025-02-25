from django.db import models
from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.urls import path
from django.contrib.auth.models import User

# MODELOS
class Categoria(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Plato(models.Model):
    CATEGORIA_CHOICES = [
        ('primer_plato', 'Primer Plato'),
        ('segundo_plato', 'Segundo Plato'),
        ('postre', 'Postre'),
        ('bebida', 'Bebida')
    ]

    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True, null=True)
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    disponibilidad = models.BooleanField(default=True)
    categoría = models.ForeignKey(Categoria, related_name='platos', on_delete=models.CASCADE)
    alergenos = models.JSONField(default=list)
    cantidad = models.IntegerField(default=0)
    imagen = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.nombre

class Pedido(models.Model):
    ESTADO_CHOICES = [
        ('en_proceso', 'En Proceso'),
        ('enviado', 'Enviado'),
        ('entregado', 'Entregado'),
        ('cancelado', 'Cancelado'),
    ]

    id = models.AutoField(primary_key=True)
    cliente = models.ForeignKey(User, on_delete=models.CASCADE, related_name='pedidos')
    fecha_hora = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='pendiente')
    direccion_envio = models.TextField()

    def __str__(self):
        return f'Pedido {self.id} - {self.cliente.username}'
    
# SERIALIZERS
class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class PlatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plato
        fields = '__all__'

class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields = '__all__'

# VISTAS PERSONALIZADAS
class CategoriaListCreateAPIView(APIView):
    def get(self, request):
        categorias = Categoria.objects.all()
        serializer = CategoriaSerializer(categorias, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategoriaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlatoListCreateAPIView(APIView):
    def get(self, request):
        platos = Plato.objects.all()
        serializer = PlatoSerializer(platos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PlatoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlatoDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Plato.objects.get(pk=pk)
        except Plato.DoesNotExist:
            return None

    def get(self, request, pk):
        plato = self.get_object(pk)
        if not plato:
            return Response({"error": "Plato no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = PlatoSerializer(plato)
        return Response(serializer.data)

    def put(self, request, pk):
        plato = self.get_object(pk)
        if not plato:
            return Response({"error": "Plato no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = PlatoSerializer(plato, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        plato = self.get_object(pk)
        if not plato:
            return Response({"error": "Plato no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        plato.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class PlatosDisponiblesAPIView(APIView):
    def get(self, request):
        platos = Plato.objects.filter(disponibilidad=True)
        serializer = PlatoSerializer(platos, many=True)
        return Response(serializer.data)

class PlatosPorCategoriaAPIView(APIView):
    def get(self, request, categoria_id):
        platos = Plato.objects.filter(categoria_id=categoria_id)
        serializer = PlatoSerializer(platos, many=True)
        return Response(serializer.data)

class PedidoListCreateAPIView(APIView):
    def get(self, request):
        pedidos = Pedido.objects.all()
        serializer = PedidoSerializer(pedidos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PedidoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# URLS
urlpatterns = [
    path('api/categorias/', CategoriaListCreateAPIView.as_view(), name='categoria-list-create'),
    path('api/platos/', PlatoListCreateAPIView.as_view(), name='plato-list-create'),
    path('api/platos/<int:pk>/', PlatoDetailAPIView.as_view(), name='plato-detail'),
    path('api/platos/disponibles/', PlatosDisponiblesAPIView.as_view(), name='platos-disponibles'),
    path('api/platos/categoria/<int:categoria_id>/', PlatosPorCategoriaAPIView.as_view(), name='platos-por-categoria'),
    path('api/pedidos/', PedidoListCreateAPIView.as_view(), name='pedido-list-create')
]

