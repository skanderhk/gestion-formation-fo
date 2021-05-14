import { Etudiant } from './Etudiant.model';

export interface FichePresence {
  readonly id?: number;
  etudiant: Etudiant;
  presence: boolean;
}
