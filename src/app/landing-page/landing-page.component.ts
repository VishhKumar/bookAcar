import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  bookingForm!: FormGroup; // Declare the form group
  submitted = false; // Track form submission

  constructor(private fb: FormBuilder) {} // Inject FormBuilder

  ngOnInit(): void {
    // Initialize the form with validation rules
    this.bookingForm = this.fb.group({
      pickupDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      carType: ['', Validators.required],
    });
  }

  // Getter for easy access to form controls
  get f() {
    return this.bookingForm.controls;
  }

  // Handle form submission
  onSubmit() {
    this.submitted = true;

    // Stop if the form is invalid
    if (this.bookingForm.invalid) {
      return;
    }

    // Form is valid, proceed with booking
    alert('Booking submitted successfully!\n' + JSON.stringify(this.bookingForm.value));
  }
}
