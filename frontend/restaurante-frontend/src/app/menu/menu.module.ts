import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { ModalItemsComponent } from './components/modal-items/modal-items.component';
import { CartaComponent } from './pages/carta/carta.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    MenuItemsComponent,
    ModalItemsComponent,
    CartaComponent
  ]
})
export class MenuModule { }
