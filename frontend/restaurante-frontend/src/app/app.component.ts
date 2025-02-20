import { Component, ViewChild } from '@angular/core';
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
  title = 'restaurante-frontend';

  @ViewChild(ShoppingCartComponent) myComponent!: ShoppingCartComponent;

  executeSidenav() {
    if (this.myComponent) {
      this.myComponent.ejecutarComando();
    }
  }
}
