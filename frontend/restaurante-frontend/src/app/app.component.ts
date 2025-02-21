import { Component, HostListener, ViewChild, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
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
export class AppComponent implements OnInit {
  showScrollButton = false;

  @ViewChild(ShoppingCartComponent) myComponent!: ShoppingCartComponent;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    // Escucha cambios en la navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const header = document.getElementById('main-header');
      const footer = document.getElementById('main-footer');

      const isAuthRoute = event.urlAfterRedirects.includes('/login') || event.urlAfterRedirects.includes('/register');

      if (header) {
        this.renderer.setStyle(header, 'display', isAuthRoute ? 'none' : 'block');
      }

      if (footer) {
        this.renderer.setStyle(footer, 'display', isAuthRoute ? 'none' : 'block');
      }
    });
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    this.showScrollButton = window.scrollY > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  executeSidenav() {
    if (this.myComponent) {
      this.myComponent.ejecutarComando();
    }
  }

  title = 'restaurante-frontend';
}
