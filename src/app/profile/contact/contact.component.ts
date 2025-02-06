import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model: any = {};

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.http.post('http://52.90.136.12:3000/send-email', this.model).subscribe(
        response => {
          alert('Email sent successfully!');
          form.reset();
        },
        error => {
          alert('Error sending email. Please try again later.');
        }
      );
    }
  }
}
