<<<<<<< HEAD
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { Formateur } from 'src/app/shared/models/Formateur.model';
import { FormateurService } from '../../services/Formateur.service';
=======
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Formateur } from 'src/app/shared/models/Formateur.model';
import { FormateurService } from '../../services/formateur.service';
>>>>>>> 86d6c3575909831849ebb52ac65e0a0869447444
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SimpleDialogComponent } from 'src/app/shared/components/simpleDialog/simpleDialog.component';
import { getFullname } from 'src/app/shared/functions/commun';

@Component({
  selector: 'app-formateur-list',
  templateUrl: './formateur-list.component.html',
  styleUrls: ['./formateur-list.component.scss'],
})
<<<<<<< HEAD
export class FormateurListComponent implements OnInit, AfterViewInit {
  public formateurs: Formateur[] = [];
  public dataSource = new MatTableDataSource(this.formateurs);
  public getFullname = getFullname;

=======
export class FormateurListComponent implements OnInit {
  displayedColumns: string[] = ['fullname', 'username', 'actions'];
  public formateurs: Formateur[] = [];
  public dataSource = new MatTableDataSource(this.formateurs);
  public getFullname = getFullname;
>>>>>>> 86d6c3575909831849ebb52ac65e0a0869447444
  constructor(
    private formateurService: FormateurService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {}
<<<<<<< HEAD

  ngOnInit(): void {
    this.loadformateurs();
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  loadformateurs(): void {
    this.formateurService.getFormateurs().subscribe((formateurs: Formateur[]) => {
      this.formateurs = formateurs;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

=======

  ngOnInit(): void {
    this.loadFormateurs();
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  loadFormateurs(): void {
    this.formateurService
      .getFormateurs()
      .subscribe((formateurs: Formateur[]) => {
        this.formateurs = formateurs;
        this.dataSource = new MatTableDataSource(this.formateurs);
      });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

>>>>>>> 86d6c3575909831849ebb52ac65e0a0869447444
  onDelete(formateur: Formateur): void {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      data: {
        title: 'Supprimer formateur',
        message:
<<<<<<< HEAD
          "Êtes-vous sûr de vouloir de supprimer l'formateur " +
=======
          'Êtes-vous sûr de vouloir de supprimer le formateur ' +
>>>>>>> 86d6c3575909831849ebb52ac65e0a0869447444
          getFullname(formateur) +
          '?',
        buttonLabel: 'Supprimer',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.formateurService.deleteFormateur(formateur).subscribe((data) => {
<<<<<<< HEAD
          this.loadformateurs();
          this.snackBar.open('formateur supprimé avec succès', 'OK', {
=======
          this.loadFormateurs();
          this.snackBar.open('Formateur supprimé avec succès', 'OK', {
>>>>>>> 86d6c3575909831849ebb52ac65e0a0869447444
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        });
      }
    });
  }
}
