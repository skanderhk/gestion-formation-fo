import { Matiere } from './Matiere.model';

export interface Note {
  readonly id?: number;
  noteDC: number;
  noteDS: number;
  moyenne?: number;
  matiere: Matiere;
}
