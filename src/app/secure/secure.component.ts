import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '../core/service/Auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Role } from '../shared/constants/Role.enum';
import { Router } from '@angular/router';
import { SimpleDialogComponent } from '../shared/components/simpleDialog/simpleDialog.component';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../core/service/TokenStorage.service';
import { User } from '../shared/models/User.model';
import { getFullname } from '../shared/functions/commun';
import * as $ from 'jquery';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss'],
})
export class SecureComponent implements OnInit, OnDestroy {
  public open = true;
  public user: User;
  public getFullname = getFullname;
  private subscription: Subscription;
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getConnectedUser();
  }

  getConnectedUser(): void {
    this.subscription = this.authService.connectedUser().subscribe((user) => {
      this.user = user;
      const role = user.role;
      this.tokenStorage.setRole(user.role);
      this.tokenStorage.setUser(user);
      if (role === Role.ADMIN) {
        this.router.navigate(['secure/admin']);
      } else if (role === Role.FORMATEUR) {
        this.router.navigate(['secure/formateur']);
      } else {
        this.router.navigate(['secure/etudiant']);
      }
    });
  }



  openClose(): void {
    this.open = !this.open;
  }

  logout(): void {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      data: {
        title: 'Déconnexion',
        message: 'Êtes-vous sûr de se déconnecter ?',
        buttonLabel: 'Déconnecter',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.tokenStorage.clearToken();
        this.router.navigate(['login']);
        this.snackBar.open('Vous êtes déconnecter', 'OK', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary'],
        });
      }
    });
  }

  get isAdmin(): Role {
    return Role.ADMIN;
  }
  get isEtudiant(): Role {
    return Role.ETUDIANT;
  }
  get isFormateur(): Role {
    return Role.FORMATEUR;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
