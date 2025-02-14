import { Routes } from '@angular/router';

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
    path: '**',
    redirectTo: '', // ✅ Redirigir a Home si la ruta no existe
    pathMatch: 'full'
  }
];
