import { Etudiant } from './Etudiant.model';
import { Matiere } from './Matiere.model';

export interface Groupe {
  readonly id?: number;
  libelle: string;
  listEtudiant: Etudiant[];
  listMatiere: Matiere[];
}
