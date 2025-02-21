import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CartService } from './services/cart-service';

@Component({
  selector: 'app-shopping-cart',
  imports: [RouterOutlet, CommonModule, MatSidenavModule, MatButtonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';
  shouldRun = false;
  cartItems: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object, public cartService: CartService) {}

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
}
