import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface MenuItem {
  nombre: string;
  precio: number;
  alergenos: string[];
  imagen: string;
}

@Component({
  selector: 'app-modal-items',  // 👈 Verifica que sea este nombre
  templateUrl: './modal-items.component.html',
  imports: [CommonModule],
  styleUrls: ['./modal-items.component.css']
})
export class ModalItemsComponent {
  @Input() item!: MenuItem;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  addToCart() {
    alert(`Has añadido "${this.item.nombre}" al carrito.`);
  }
}
