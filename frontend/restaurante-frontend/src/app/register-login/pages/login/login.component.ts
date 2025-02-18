import { Component } from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[ AuthFormComponent]
})
export class LoginComponent {
  onLogin(data: { email: string, password: string }) {
    console.log('Login Data:', data);
    // Aquí puedes conectar con un servicio de autenticación
  }
}
