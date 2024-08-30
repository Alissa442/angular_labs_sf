// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.loggedIn.next(true);
    }
  }

  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedIn.next(true);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
