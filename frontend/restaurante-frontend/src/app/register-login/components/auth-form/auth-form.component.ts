import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'], // ✅ Usa styleUrls en vez de styles
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AuthFormComponent {
  @Input() isRegisterMode: boolean = false;
  @Output() formSubmit = new EventEmitter<any>();

  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.password = '';
    this.confirmPassword = '';
  }

  onSubmit() {
    if (this.isRegisterMode) {
      if (!this.name || !this.phone || !this.email || !this.password || !this.confirmPassword) {
        alert('Por favor, completa todos los campos');
        return;
      }

      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      this.formSubmit.emit({
        mode: 'register',
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password
      });

    } else {
      if (!this.email || !this.password) {
        alert('Por favor, ingresa tu email y contraseña');
        return;
      }

      this.formSubmit.emit({
        mode: 'login',
        email: this.email,
        password: this.password
      });
    }
  }
}
