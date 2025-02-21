import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../../shopping-cart/services/cart-service';

interface MenuItem {
  nombre: string;
  precio: number;
  alergenos: string[];
  imagen: string;
  cantidad: number;
}

@Component({
  selector: 'app-modal-items',
  templateUrl: './modal-items.component.html',
  imports: [CommonModule],
  styleUrls: ['./modal-items.component.css']
})
export class ModalItemsComponent {
  @Input() item!: MenuItem;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.item);
    this.close.emit();
  }
}