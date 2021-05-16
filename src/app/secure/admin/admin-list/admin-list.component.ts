import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { Admin } from 'src/app/shared/models/Admin.model';
import { AdminService } from '../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SimpleDialogComponent } from 'src/app/shared/components/simpleDialog/simpleDialog.component';
import { getFullname } from 'src/app/shared/functions/commun';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['fullname', 'username', 'actions'];
  public admins: Admin[] = [];
  public dataSource = new MatTableDataSource(this.admins);
  public getFullname = getFullname;

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAdmins();
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  loadAdmins(): void {
    this.adminService.getAdmins().subscribe((admins: Admin[]) => {
      this.admins = admins;
      this.dataSource = new MatTableDataSource(this.admins);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(admin: Admin): void {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      data: {
        title: 'Supprimer admin',
        message:
          "Êtes-vous sûr de vouloir de supprimer l'admin " +
          getFullname(admin) +
          '?',
        buttonLabel: 'Supprimer',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.adminService.deleteAdmin(admin).subscribe((data) => {
          this.loadAdmins();
          this.snackBar.open('Admin supprimé avec succès', 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        });
      }
    });
  }
}
