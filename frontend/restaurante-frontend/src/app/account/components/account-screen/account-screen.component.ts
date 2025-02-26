import { Component } from '@angular/core';

@Component({
  selector: 'app-account-screen',
  templateUrl: './account-screen.component.html',
  styleUrls: ['./account-screen.component.css']
})
export class AccountScreenComponent {
  user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com'
  };

  logout() {
    console.log('Cerrando sesión...');
    alert('Sesión cerrada con éxito');
    // Aquí iría la lógica para cerrar sesión
  }
}
