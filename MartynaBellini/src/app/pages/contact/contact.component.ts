import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule, NgIf],
  standalone: true
})
export class ContactComponent {
  form = { name: '', email: '', subject: '', message: '' };
  sent = false;
  submit() { this.sent = true; }
}
