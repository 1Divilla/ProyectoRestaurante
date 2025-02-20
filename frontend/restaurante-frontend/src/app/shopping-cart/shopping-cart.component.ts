import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  
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
}
