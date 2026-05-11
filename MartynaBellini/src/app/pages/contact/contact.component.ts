import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf] // Note: HttpClient is usually provided in app.config.ts
})
export class ContactComponent {
  // Using 'inject' is the modern Angular 19 way to avoid constructor errors
  private http = inject(HttpClient);

  // This object structure must match the destructuring in server.js:
  // const { name, email, subject, message } = req.body;
  form = { 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  };

  sent = false;
  error = false;

  submit() {
    // Ensure the URL matches your server port
    this.http.post('/api/send-email', this.form)
      .subscribe({
        next: () => {
          this.sent = true;
          this.error = false;
          // Optional: Reset form after success
          this.form = { name: '', email: '', subject: '', message: '' };
        },
        error: (err) => {
          console.error('Email error:', err);
          this.error = true;
        }
      });
  }
}