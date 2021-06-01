import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Formateur } from 'src/app/shared/models/Formateur.model';
import { FormateurService } from '../../services/formateur.service';
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
export class FormateurListComponent implements OnInit {
  displayedColumns: string[] = ['fullname', 'username', 'actions'];
  public formateurs: Formateur[] = [];
  public dataSource = new MatTableDataSource(this.formateurs);
  public getFullname = getFullname;
  constructor(
    private formateurService: FormateurService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {}

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

  onDelete(formateur: Formateur): void {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      data: {
        title: 'Supprimer formateur',
        message:
          'Êtes-vous sûr de vouloir de supprimer le formateur ' +
          getFullname(formateur) +
          '?',
        buttonLabel: 'Supprimer',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.formateurService.deleteFormateur(formateur).subscribe((data) => {
          this.loadFormateurs();
          this.snackBar.open('Formateur supprimé avec succès', 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        });
      }
    });
  }
}
