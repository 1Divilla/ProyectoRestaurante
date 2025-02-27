import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Reserva {
  id: number;
  nombreCliente: string;
  fecha: string; // Formato YYYY-MM-DD
  hora: string;  // Formato HH:mm
  cantidadPersonas: number;
  estado: 'Pendiente' | 'Confirmada' | 'Cancelada';
}

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la app
})
export class ReservationService {
  private apiUrl = 'http://127.0.0.1:8000/api/reservas/'; // Cambia por tu endpoint real

  constructor(private http: HttpClient) {}

  // Obtener todas las reservas
  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.apiUrl);
  }

  // Crear una nueva reserva
  crearReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.apiUrl, reserva);
  }

  // Actualizar el estado de una reserva
  actualizarReserva(id: number, data: Partial<Reserva>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }
  cancelarReserva(id: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}`, { estado: 'Cancelada' });
  }
  
  // Eliminar una reserva
  eliminarReserva(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
