import { RouterModule, Routes } from '@angular/router';

import { AddAdminComponent } from './admin-list/add-admin/add-admin.component';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { EditAdminComponent } from './admin-list/edit-admin/edit-admin.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { FormateurListComponent } from './formateur-list/formateur-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin-list',
        // pathMatch: 'full',
      },
      { path: 'admin-list', component: AdminListComponent },
      { path: 'admin-list/add', component: AddAdminComponent },
      { path: 'admin-list/edit/:id', component: EditAdminComponent },
      { path: 'formateur-list', component: FormateurListComponent },
      { path: 'etudiant-list', component: EtudiantListComponent },
      {
        path: '**',
        redirectTo: '/404',
        pathMatch: 'full',
      },
    ],
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
