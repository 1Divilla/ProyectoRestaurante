import { Component } from '@angular/core';
import { TableSelectorComponent } from '../../components/table-selector/table-selector.component';
import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservations',
  standalone: true,
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  imports: [CommonModule, TableSelectorComponent, ReservationFormComponent]  // ✅ Importarlos aquí
})
export class ReservationsComponent { }
