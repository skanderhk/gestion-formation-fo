import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleService } from 'src/app/core/service/Role.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorityGuard implements CanActivate {
  constructor(private roleService: RoleService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.roleService.isAdmin()) {
      this.router.navigate(['secure/admin']);
      return true;
    } else if (this.roleService.isEtudiant()) {
      this.router.navigate(['secure/etudiant']);
      return true;
    } else if (this.roleService.isFormateur()) {
      this.router.navigate(['secure/formateur']);
      return true;
    } else {
      return false;
    }
  }
}
