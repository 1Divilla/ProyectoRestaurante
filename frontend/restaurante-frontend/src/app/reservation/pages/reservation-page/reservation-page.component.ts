import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';
import { TableSelectionComponent } from '../../components/table-section/table-section.component';


@Component({
  selector: 'app-reservation-page',
  standalone: true,
  imports: [CommonModule, ReservationFormComponent, TableSelectionComponent],
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent {
  selectedTableId: number | null = null;
  reservationData: any = null;
  showError = false;

  onFormSubmit(data: any): void {
    this.reservationData = data;
  }

  onTableSelected(tableId: number): void {
    this.selectedTableId = tableId;
  }

  showSummary(): void {
    if (this.reservationData && this.selectedTableId) {
      alert(
        `Reserva confirmada para ${this.reservationData.name} en la mesa ${this.selectedTableId}`
      );
      this.showError = false;
    } else {
      this.showError = true;
    }
  }
}
