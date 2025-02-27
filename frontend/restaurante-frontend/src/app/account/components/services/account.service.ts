import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiBaseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  // Obtener usuario autenticado
  getUser(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.apiBaseUrl}/users/me/`, { headers });
  }

  // Método para obtener headers con token de autenticación
  private getAuthHeaders(): HttpHeaders {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');  // Solo se accede a localStorage en el navegador
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Token ${token}` : ''
      });
    }
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  // Obtener pedidos del usuario autenticado
  getUserOrders(): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiBaseUrl}/orders/`, { headers });
  }


  // Obtener detalles de un pedido específico
  getOrderDetails(orderId: number): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiBaseUrl}/orders_details/?order=${orderId}`, { headers });
  }

}
