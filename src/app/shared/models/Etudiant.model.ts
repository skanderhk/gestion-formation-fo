import { Groupe } from './Groupe.model';
import { Note } from './Note.model';
import { Role } from '../constants/Role.enum';

export interface Etudiant {
  readonly id?: number;
  nom: string;
  prenom: string;
  username: string;
  password?: string;
  readonly role?: Role;
  groupe?: Groupe;
  listNote?: Note[];
}
