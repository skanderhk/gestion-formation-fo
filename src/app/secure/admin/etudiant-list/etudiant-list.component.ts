import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { Etudiant } from 'src/app/shared/models/Etudiant.model';
import { EtudiantService } from '../../services/etudiant.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SimpleDialogComponent } from 'src/app/shared/components/simpleDialog/simpleDialog.component';
import { getFullname } from 'src/app/shared/functions/commun';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss'],
})
export class EtudiantListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['fullname', 'username', 'actions'];
  public etudiants: Etudiant[] = [];
  public dataSource = new MatTableDataSource(this.etudiants);
  public getFullname = getFullname;

  constructor(
    private etudiantService: EtudiantService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadEtudiants();
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  loadEtudiants(): void {
    this.etudiantService.getEtudiants().subscribe((etudiants: Etudiant[]) => {
      this.etudiants = etudiants;
      this.dataSource = new MatTableDataSource(this.etudiants);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(etudiant: Etudiant): void {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      data: {
        title: 'Supprimer etudiant',
        message:
          "Êtes-vous sûr de vouloir de supprimer l'etudiant " +
          getFullname(etudiant) +
          '?',
        buttonLabel: 'Supprimer',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.etudiantService.deleteEtudiant(etudiant).subscribe((data) => {
          this.loadEtudiants();
          this.snackBar.open('Etudiant supprimé avec succès', 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        });
      }
    });
  }
}
