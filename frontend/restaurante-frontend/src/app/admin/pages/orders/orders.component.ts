import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  imports: [CommonModule, NgFor]  // ✅ Agregar esto
})
export class OrdersComponent {
  orders = [
    { id: 1, client: 'Juan Pérez', status: 'Pendiente' },
    { id: 2, client: 'María López', status: 'Entregado' },
    { id: 3, client: 'Carlos García', status: 'En preparación' }
  ];
}
