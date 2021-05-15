import { Injectable } from '@angular/core';
import { Role } from 'src/app/shared/constants/Role.enum';
import { TokenStorageService } from './TokenStorage.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private tokeStorage: TokenStorageService) {}

  isAdmin(): boolean {
    return this.tokeStorage.getRole() === Role.ADMIN;
  }

  isEtudiant(): boolean {
    return this.tokeStorage.getRole() === Role.ETUDIANT;
  }

  isFormateur(): boolean {
    return this.tokeStorage.getRole() === Role.FORMATEUR;
  }
}
