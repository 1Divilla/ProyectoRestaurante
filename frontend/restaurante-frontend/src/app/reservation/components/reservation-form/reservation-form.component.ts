import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  @Output() formSubmit = new EventEmitter<any>();

  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      people: ['', [Validators.required, Validators.min(1)]],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      this.formSubmit.emit(this.reservationForm.value);
    } else {
      this.reservationForm.markAllAsTouched();
    }
  }
}
