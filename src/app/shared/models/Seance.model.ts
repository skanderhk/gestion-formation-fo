import { FichePresence } from './FichePresence.model';

export interface Seance {
  readonly id?: number;
  date: Date;
  duree: number;
  description: string;
  listFichePresence: FichePresence[];
}
