import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/usuarios/';

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Registro de usuario
  register(userData: { nombre: string, email: string, numero_telefono: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}register/`, userData, this.httpOptions)
      .pipe(catchError(error => { throw error; }));
  }
  
  
  

  // Inicio de sesión
  login(credentials: { email: string, password: string }): Observable<any> {
    console.log('🔍 Datos enviados al login:', credentials); // Agregar esta línea
    return this.http.post(`${this.apiUrl}login/`, credentials, this.httpOptions)
      .pipe(catchError(error => { throw error; }));
  }
  
  
  // Guardar datos del usuario autenticado
  saveUserData(user: any) {
    if (user && user.token) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', JSON.stringify(user.user));
    }
  }

  // Obtener el usuario autenticado
  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Obtener el token de autenticación
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  // Cerrar sesión
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  // Verificar si el usuario es "gerente"
  isGerente(): boolean {
  const user = this.getUser();
  return user && user.rol === 'gerente';
}

}
