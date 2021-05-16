import { AddAdminComponent } from './admin-list/add-admin/add-admin.component';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminRoutes } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { EditAdminComponent } from './admin-list/edit-admin/edit-admin.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, AdminRoutes, SharedModule],
  declarations: [
    AdminComponent,
    AdminListComponent,
    AddAdminComponent,
    EditAdminComponent,
  ],
})
export class AdminModule {}
