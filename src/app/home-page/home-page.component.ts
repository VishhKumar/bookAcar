import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterEvent, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  bookingForm!: FormGroup;  // Declare the form group

  constructor(private fb: FormBuilder) { }  // Inject FormBuilder
  
  
  ngOnInit(): void {
    
    this.bookingForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      pickupLocation: ['', Validators.required],
      destination: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1), Validators.max(14)]],
    });
  }
 
  submitBooking() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);  // Output form data
    } else {
      console.log('Form is not valid');
    }
  }
}
