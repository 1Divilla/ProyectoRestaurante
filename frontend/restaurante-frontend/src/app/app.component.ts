import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionComponent } from './home/components/description/description.component';
import { FeaturedDishesComponent } from './home/components/featured-dishes/featured-dishes.component';
import { ImgComponent } from './home/components/img/img.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DescriptionComponent, 
    FeaturedDishesComponent, ImgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurante-frontend';
}
