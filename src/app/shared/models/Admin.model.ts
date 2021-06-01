import { Role } from '../constants/Role.enum';

export interface Admin {
  readonly id?: number;
  userCode?: string;
  firstname: string;
  lastname: string;
  username: string;
  email?: string;
  password?: string;
  profileImageUrl?: string;

  readonly role?: Role;
}
