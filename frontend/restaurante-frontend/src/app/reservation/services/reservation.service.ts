import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://127.0.0.1:8000/api/public-reservas/';

  constructor(private http: HttpClient) {}

  createReservation(reservationData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body = {
      mesa: reservationData.mesa,                    // Nombre de la mesa
      nombre_cliente: reservationData.nombre_cliente, // Nombre del cliente
      personas: reservationData.people,
      fecha_hora: `${reservationData.date}T${reservationData.time}:00Z`
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
