import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface OrderDetail {
  orderId: number;
  plato: string;
  cantidad: number;
  precio_unitario: number;
  total: number;
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  imports: [CommonModule]
})
export class OrderDetailsComponent implements OnChanges {
  @Input() orderId: number | null = null;

  orderDetails: OrderDetail[] = [
    { orderId: 1, plato: 'Pizza Margherita', cantidad: 2, precio_unitario: 8.50, total: 17.00 },
    { orderId: 1, plato: 'Ensalada César', cantidad: 1, precio_unitario: 5.00, total: 5.00 },
    { orderId: 2, plato: 'Hamburguesa Clásica', cantidad: 1, precio_unitario: 10.00, total: 10.00 },
    { orderId: 2, plato: 'Papas Fritas', cantidad: 1, precio_unitario: 3.50, total: 3.50 }
  ];

  filteredDetails: OrderDetail[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['orderId'] && this.orderId !== null) {
      console.log("Filtrando detalles para el orderId:", this.orderId);
      this.updateDetails();
    }
  }

  updateDetails() {
    this.filteredDetails = this.orderDetails.filter(detail => detail.orderId === this.orderId);
    console.log("Detalles filtrados:", this.filteredDetails);
  }
}
