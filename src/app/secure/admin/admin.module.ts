import { AddAdminComponent } from './admin-list/add-admin/add-admin.component';
import { AddEtudiantComponent } from './etudiant-list/add-etudiant/add-etudiant.component';
import { AddFormateurComponent } from './formateur-list/add-formateur/add-formateur.component';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminRoutes } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { EditAdminComponent } from './admin-list/edit-admin/edit-admin.component';
import { EditEtudiantComponent } from './etudiant-list/edit-etudiant/edit-etudiant.component';
import { EditFormateurComponent } from './formateur-list/edit-formateur/edit-formateur.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { FormateurListComponent } from './formateur-list/formateur-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, AdminRoutes, SharedModule],
  declarations: [
    AdminComponent,
    AdminListComponent,
    AddAdminComponent,
    EditAdminComponent,
    EtudiantListComponent,
    AddEtudiantComponent,
    EditEtudiantComponent,
    FormateurListComponent,
    AddFormateurComponent,
    EditFormateurComponent,
  ],
})
export class AdminModule {}
