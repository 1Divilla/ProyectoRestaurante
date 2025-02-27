<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';

import { ReservationService } from './reservation.service';

describe('ReservationService', () => {
  let service: ReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
=======
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://127.0.0.1:8000/api/reservas/';  // Asegúrate de que esta es la URL correcta

  constructor(private http: HttpClient) {}

  createReservation(reservationData: any): Observable<any> {
    const token = localStorage.getItem('token');  // Asegúrate de que el token se guarda en localStorage

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`  // Incluir el token en los headers
    });

    const body = {
      nombre: reservationData.name,  // Asegúrate de que los nombres coincidan con el backend
      personas: reservationData.people,
      fecha_hora: `${reservationData.date}T${reservationData.time}:00Z`
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
>>>>>>> 38b00fbe3e4985da7b8baecf73e3d4cdfa56b57a
