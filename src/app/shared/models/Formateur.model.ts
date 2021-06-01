import { Groupe } from './Groupe.model';
import { Matiere } from './Matiere.model';
import { Role } from '../constants/Role.enum';

export interface Formateur {
  readonly id?: number;
  userCode?: string;
  firstname: string;
  lastname: string;
  username: string;
  email?: string;
  password?: string;
  profileImageUrl?: string;
  readonly role?: Role;
  listMatiere: Matiere[];
  listGroupe: Groupe[];
}
