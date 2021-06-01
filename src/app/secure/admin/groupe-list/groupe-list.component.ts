import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Groupe } from 'src/app/shared/models/Groupe.model';
import { GroupeService } from '../../services/groupe.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SimpleDialogComponent } from 'src/app/shared/components/simpleDialog/simpleDialog.component';

@Component({
  selector: 'app-groupe-list',
  templateUrl: './groupe-list.component.html',
  styleUrls: ['./groupe-list.component.scss'],
})
export class GroupeListComponent implements OnInit {
  displayedColumns: string[] = [
    'libelle',
    'nombreEtudiant',
    'nombreMatiere',
    'actions',
  ];
  public groupes: Groupe[] = [];
  public dataSource = new MatTableDataSource(this.groupes);
  constructor(
    private groupeService: GroupeService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadGroupes();
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  loadGroupes(): void {
    this.groupeService.getGroupes().subscribe((groupes: Groupe[]) => {
      this.groupes = groupes;
      this.dataSource = new MatTableDataSource(this.groupes);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(groupe: Groupe): void {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      data: {
        title: 'Supprimer groupe',
        message:
          'Êtes-vous sûr de vouloir de supprimer le groupe ' +
          groupe.libelle +
          '?',
        buttonLabel: 'Supprimer',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.groupeService.deleteGroupe(groupe).subscribe((data) => {
          this.loadGroupes();
          this.snackBar.open('Groupe supprimé avec succès', 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        });
      }
    });
  }
}
