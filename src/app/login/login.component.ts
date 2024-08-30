import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  private users = [
    { email: 'user1@example.com', password: 'password1', username: 'User One', birthdate: '1990-01-01', age: 34 },
    { email: 'user2@example.com', password: 'password2', username: 'User Two', birthdate: '1992-02-02', age: 32 },
    { email: 'user3@example.com', password: 'password3', username: 'User Three', birthdate: '1994-03-03', age: 30 }
  ];

  constructor(private router: Router) {}

  onLogin() {
    this.errorMessage = null;

    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user)); // Store user data in session storage
      this.router.navigate(['/account']); // Navigate to the account page
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
