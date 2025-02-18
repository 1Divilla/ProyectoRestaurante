import { Component } from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, AuthFormComponent] // ✅ IMPORTAR AuthFormComponent
})
export class RegisterComponent {
  onRegister(data: { name: string, email: string, phone: string, password: string }) {
    console.log('Datos de registro:', data);
  }
}
