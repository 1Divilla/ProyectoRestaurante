import { Component } from '@angular/core';
import { DescriptionComponent } from '../../components/description/description.component';
import { FeaturedDishesComponent } from '../../components/featured-dishes/featured-dishes.component';
@Component({
  selector: 'app-home',
  imports: [DescriptionComponent, FeaturedDishesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
