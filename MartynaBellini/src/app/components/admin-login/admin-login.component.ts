import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent { 
  private router = inject(Router);
  private http = inject(HttpClient);
  
  username = signal('');
  password = signal('');
  errorMessage = signal('');
  isLoading = signal(false);

  onLogin() { 
    // 1. Loading durumunu başlat
    this.isLoading.set(true);
    this.errorMessage.set('');

    console.log('Giriş denemesi:', { 
      u: this.username(), 
      p: this.password() 
    });

    // 2. loginData'yı fonksiyon İÇİNDE tanımlıyoruz
    const loginData = { 
      Username: this.username(), 
      Password: this.password() 
    };

    if (!loginData.Username || !loginData.Password) {
      this.errorMessage.set('Please enter username and password');
      return;
    }

    // 3. API İsteği (URL düzeltildi)
    // Not: localhost kullanıyorsan Vercel'de çalışmaz, canlı API linkini koymalısın
    this.http.post<{token: string}>('http://localhost:8080/api/Auth/login', loginData)
      .subscribe({
        next: (response) => {
          localStorage.setItem('isAdmin', 'true');
          localStorage.setItem('adminToken', response.token);
          this.router.navigate(['/admin-dashboard']);
        },
        error: (err) => {
          this.errorMessage.set('Wrong username or password or Server Error!');
          this.isLoading.set(false);
          console.error('Login Error:', err);
        }
      });
  }
}