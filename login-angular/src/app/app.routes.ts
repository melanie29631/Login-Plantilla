import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import path from 'path';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
