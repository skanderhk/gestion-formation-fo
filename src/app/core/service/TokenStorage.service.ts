import { Injectable } from '@angular/core';
import { Role } from 'src/app/shared/constants/Role.enum';
import { User } from 'src/app/shared/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setRole(role: Role): void {
    localStorage.setItem('role', role);
  }

  getRole(): Role {
    return localStorage.getItem('role') as Role;
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

  clearToken(): void {
    localStorage.clear();
  }
}
