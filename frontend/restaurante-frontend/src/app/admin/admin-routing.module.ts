import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // ✅ Página principal del admin
  { path: 'orders', component: OrdersComponent }, // ✅ Página de pedidos
  { path: 'reservations', component: ReservationsComponent } // ✅ Página de reservas
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
