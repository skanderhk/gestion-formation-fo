import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../service/Auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuthorized().pipe(
      map((authorized) => {
        if (authorized) {
          this.snackBar.open('Connecté', 'OK', {
            duration: 3500,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
          return true;
        } else {
          this.snackBar.open('Déconnecté', 'OK', {
            duration: 3500,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
          this.router.navigate(['public']);
          return false;
        }
      })
    );
  }
}
