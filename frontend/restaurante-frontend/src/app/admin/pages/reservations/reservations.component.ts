import { Component, OnInit} from '@angular/core';
import { TableSelectorComponent } from '../../components/table-selector/table-selector.component';
import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../../../reservation/services/reservation.service';
import { ReservationPageComponent } from '../../../reservation/pages/reservation-page/reservation-page.component';

interface Reserva {
  id: number;
  nombreCliente: string;
  fecha: string;
  hora: string;
  cantidadPersonas: number;
  estado: 'Pendiente' | 'Confirmada' | 'Cancelada';
}
@Component({
  selector: 'app-reservations',
  standalone: true,
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  imports: [CommonModule, TableSelectorComponent, ReservationFormComponent]  // ✅ Importarlos aquí
})
export class ReservationsComponent implements OnInit {
  selectedTableId: number | null = null;
  reservationData: any = null;
  showError = false;
  reservas: Reserva[] = [];
  isAdmin: boolean = true; // Cambia esto según tu lógica de autenticación

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.obtenerReservas();
  }

  obtenerReservas() {
    this.reservationService.getReservas().subscribe((data: Reserva[]) => {
      this.reservas = data;
    }, error => {
      console.error('Error al obtener reservas:', error);
    });
  }

  cancelarReserva(id: number) {
    if (confirm('¿Seguro que deseas cancelar esta reserva?')) {
      this.reservationService.cancelarReserva(id).subscribe(() => {
        alert('Reserva cancelada');
        this.obtenerReservas(); // Recargar la lista después de cancelar
      }, error => {
        console.error('Error al cancelar la reserva:', error);
      });
    }
  }

  onFormSubmit(data: any): void {
    this.reservationData = data;
  }

  onTableSelected(tableId: number): void {
    this.selectedTableId = tableId;
  }
}
