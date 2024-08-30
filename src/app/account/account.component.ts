import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: { username?: string, birthdate?: string, age?: number, email?: string } = {}; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      // Redirect to login if no user data is found
      this.router.navigate(['/login']);
    }
  }
}
