import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-screen',
  templateUrl: './account-screen.component.html',
  styleUrls: ['./account-screen.component.css']
})
export class AccountScreenComponent implements OnInit {
  user: any = {}; // Almacenará los datos del usuario autenticado

  constructor(private accountService: AccountService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.accountService.getUser().subscribe(userData => {
      console.log('Usuario cargado desde localStorage:', userData); // Depuración
      if (userData) {
        this.user = userData;
        this.cdr.detectChanges(); // Forzar la actualización de la vista
      } else {
        console.warn('No se encontró usuario en localStorage.');
      }
    });
  }

  logout() {
    console.log('Cerrando sesión...');
    localStorage.removeItem('user'); // Eliminar usuario de localStorage
    localStorage.removeItem('token'); // Eliminar token
    alert('Sesión cerrada con éxito');
    this.user = {}; // Limpiar usuario en la vista
    this.cdr.detectChanges(); // Forzar actualización de la vista
  }
}