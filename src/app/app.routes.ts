// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];
