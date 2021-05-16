import { Groupe } from './Groupe.model';
import { Matiere } from './Matiere.model';
import { Role } from '../constants/Role.enum';

export interface Formateur {
  readonly id?: number;
  nom: string;
  prenom: string;
  username: string;
  password?: string;
  readonly role?: Role;
  listMatiere: Matiere[];
  listGroupe: Groupe[];
}
