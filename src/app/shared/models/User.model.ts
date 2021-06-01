import { Role } from '../constants/Role.enum';

export interface User {
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

export type UserLogin = Pick<User, 'username' | 'password'>;

export interface TokenResponse {
  token: string;
}
