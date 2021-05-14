import { Groupe } from './Groupe.model';
import { Seance } from './Seance.model';

export interface Matiere {
  readonly id?: number;
  volumeHoraire: number;
  libelle: string;
  nombreHeureEnseigne: number;
  listSeance: Seance[];
  groupe: Groupe;
}
