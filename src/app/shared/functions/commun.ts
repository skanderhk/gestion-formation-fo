import { Admin } from '../models/Admin.model';
import { Etudiant } from '../models/Etudiant.model';
import { Formateur } from '../models/Formateur.model';
import { User } from '../models/User.model';

export function getFullname(user: User | Admin | Etudiant | Formateur): string {
  return capitalize(user?.nom) + ' ' + user?.prenom?.toUpperCase();
}

export function capitalize(name: string): string {
  return name?.charAt(0).toUpperCase() + name?.slice(1);
}
