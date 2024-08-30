import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    username: '',
    birthdate: '',
    age: 0,
    email: ''
  };

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  saveProfile() {
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }
}
