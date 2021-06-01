import { Groupe } from './Groupe.model';
import { Note } from './Note.model';
import { Role } from '../constants/Role.enum';

export interface Etudiant {
  readonly id?: number;
  userCode?: string;
  firstname: string;
  lastname: string;
  username: string;
  email?: string;
  password?: string;
  profileImageUrl?: string;
  readonly role?: Role;
  groupe?: Groupe;
  listNote?: Note[];
}
