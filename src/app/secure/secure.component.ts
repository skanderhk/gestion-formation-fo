import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '../core/service/Auth.service';
import { Role } from '../shared/constants/Role.enum';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss'],
})
export class SecureComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getConnectedUser();
  }

  getConnectedUser(): void {
    this.subscription = this.authService.connectedUser().subscribe((user) => {
      const role = user.role;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('role', user.role);
      if (role === Role.ADMIN) {
        this.router.navigate(['./admin']);
      } else if (role === Role.FORMATEUR) {
        this.router.navigate(['./formateur']);
      } else {
        this.router.navigate(['./etudiant']);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
