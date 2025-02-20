import { Routes } from '@angular/router';
import { CartaComponent } from './menu/pages/carta/carta.component'; 
import { ReservationsComponent } from './admin/pages/reservations/reservations.component';
import { ReservationPageComponent } from './reservation/pages/reservation-page/reservation-page.component';


export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) // ✅ Carga el HomeModule correctamente
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) // ✅ Carga el AdminModule correctamente
  },
  {
    path: 'menu',
    component: CartaComponent,
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  { path: '', redirectTo: '/carta', pathMatch: 'full' },
  {
    path: 'reservation',
    component: ReservationPageComponent,
    loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)
  },
  {
    path: 'auth', // ✅ Nueva ruta para autenticación
    loadChildren: () => import('./register-login/register-login.module').then(m => m.RegisterLoginModule)
  },

  {
    path: '**',
    redirectTo: '', // ✅ Redirigir a Home si la ruta no existe
    pathMatch: 'full'
  }
];
