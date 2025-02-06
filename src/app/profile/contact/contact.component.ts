import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model: any = {};

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    console.log('Form data:', this.model);  // Check the data you're sending

    if (form.valid) {
      this.http.post('http://52.90.136.12:3000/send-email', this.model).subscribe(
        response => {
          alert('Email sent successfully!');
          form.resetForm();  // Reset the form after submission
        },
        error => {
          console.error('Error sending email:', error);  // Log error for debugging
          alert('Error sending email. Please try again later.');
        }
      );
    }
  }
}
