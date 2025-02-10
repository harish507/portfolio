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
    console.log('Form data:', this.model);  // Log form data for debugging

    if (form.valid) {
      this.http.post('https://mail.devvopsslabs.fun/send-email', this.model).subscribe(
        response => {
          console.log('Email sent successfully:', response);  // Log successful response
          alert('Email sent successfully!');
          form.resetForm();  // Reset form after submission
        },
        error => {
          console.error('Error sending email:', error);  // Log error for debugging
          alert('Error sending email. Please try again later.');
        }
      );
    } else {
      console.error('Form is invalid', form);  // Log invalid form submission attempt
    }
  }
}
