import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CartService } from './services/cart-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  imports: [RouterOutlet, CommonModule, MatSidenavModule, MatButtonModule, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';
  shouldRun = false;
  cartItems: any[] = [];
  apiUrl = 'http://localhost:8000/api'; // URL base de la API pública
  apiUrl2 = 'http://localhost:8000/public'; // URL base de la API pública


  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    public cartService: CartService,
    public dialog: MatDialog,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  ejecutarComando() {
    if (this.sidenav.opened) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
    console.log('✅ Sidenav abierto correctamente');
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      (window as any).shoppingCartComponent = this;
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

  increaseQuantity(index: number) {
    this.cartService.increaseQuantity(index);
  }

  decreaseQuantity(index: number) {
    this.cartService.decreaseQuantity(index);
  }

  openAddressDialog(): void {
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(address => {
      if (address) {
        this.checkout(address);
      }
    });
  }

  checkout(address: string): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.id) {
      alert('Debes iniciar sesión para realizar un pedido');
      return;
    }

    const pedido = {
      fecha_hora: new Date().toISOString(),
      total: this.getTotal(),
      estado: "entregado",
      direccion_envio: address,
      cliente: user.id
    };

    // Enviar el pedido a la API REST
    this.http.post(`${this.apiUrl}/pedidos/`, pedido).subscribe(
      (pedidoResponse: any) => {
        console.log('✅ Pedido creado:', pedidoResponse);

        // Enviar cada producto como un detalle del pedido con el nombre en lugar del ID
        this.cartItems.forEach(item => {
          const detalle = {
            order: pedidoResponse.id,  // ✅ Asociado al pedido recién creado
            plato_nombre: item.nombre,  // ✅ Guardamos el nombre en lugar del ID
            cantidad: item.cantidad,
            precio_unitario: item.precio
          };

          this.http.post(`${this.apiUrl2}/order-details/`, detalle).subscribe(
            detalleResponse => console.log('✅ Detalle guardado:', detalleResponse),
            error => console.error('❌ Error al guardar detalle:', error)
          );
        });

        alert('Pedido realizado con éxito');
        this.cartService.clearCart();  // Vaciar carrito
      },
      error => console.error('❌ Error al crear pedido:', error)
    );
}


}

@Component({
  selector: 'app-address-dialog',
  imports: [FormsModule],
  template: `
    <h2>Introduce tu dirección</h2>
    <input [(ngModel)]="address" placeholder="Dirección" class="input"/>
    <button mat-button (click)="confirm()">Confirmar</button>
  `,
  styles: ['.input { width: 100%; margin-bottom: 10px; padding: 8px; }']
})
export class AddressDialogComponent {
  address: string = '';

  constructor(public dialogRef: MatDialogRef<AddressDialogComponent>) {}

  confirm(): void {
    this.dialogRef.close(this.address);
  }
}