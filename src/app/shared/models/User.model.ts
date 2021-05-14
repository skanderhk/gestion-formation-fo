import { Role } from '../constants/Role.enum';

export interface User {
  readonly id?: number;
  nom: string;
  prenom: string;
  username: string;
  password?: string;
  role: Role;
}
