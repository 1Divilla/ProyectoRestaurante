import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionComponent } from './home/components/description/description.component';
import { FeaturedDishesComponent } from './home/components/featured-dishes/featured-dishes.component';
import { ImgComponent } from './home/components/img/img.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DescriptionComponent, 
    FeaturedDishesComponent, ImgComponent, ShoppingCartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showScrollButton = false;

  @HostListener("window:scroll", [])
  onScroll(): void {
    // Muestra el botón solo si el usuario ha hecho scroll hacia abajo
    this.showScrollButton = window.scrollY > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  title = 'restaurante-frontend';

  @ViewChild(ShoppingCartComponent) myComponent!: ShoppingCartComponent;

  executeSidenav() {
    if (this.myComponent) {
      this.myComponent.ejecutarComando();
    }
  }
}
