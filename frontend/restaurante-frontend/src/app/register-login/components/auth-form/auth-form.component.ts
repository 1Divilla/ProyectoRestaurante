import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AuthFormComponent {
  @Input() isRegisterMode: boolean = false; // ✅ Recibe si es Login o Registro
  @Output() formSubmit = new EventEmitter<any>();

  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  // ✅ Método para alternar entre Login y Registro
  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }

  onSubmit() {
    if (this.isRegisterMode) {
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
      this.formSubmit.emit({
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password
      });
    } else {
      this.formSubmit.emit({
        email: this.email,
        password: this.password
      });
    }
  }
}
