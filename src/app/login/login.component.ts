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

  // Hardcoded user data
  private users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
  ];

  constructor(private router: Router) {}

  onLogin() {
    // Reset error message
    this.errorMessage = null;

    // Check if the user exists in the hardcoded data
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    
    if (user) {
      // Navigate to the account page if the login is successful
      this.router.navigate(['/account']);
    } else {
      // Set an error message if the login fails
      this.errorMessage = 'Invalid email or password';
    }
  }
}
