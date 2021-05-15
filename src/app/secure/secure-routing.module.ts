import { RouterModule, Routes } from '@angular/router';

import { AuthorityGuard } from './guards/authority.guard';
import { NgModule } from '@angular/core';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'formateur',
        loadChildren: () =>
          import('./formateur/formateur.module').then((m) => m.FormateurModule),
      },
      {
        path: 'etudiant',
        loadChildren: () =>
          import('./etudiant/etudiant.module').then((m) => m.EtudiantModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: '',
    canActivate: [AuthorityGuard],
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecureRoutingModule {}
