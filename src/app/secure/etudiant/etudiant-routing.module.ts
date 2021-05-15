import { RouterModule, Routes } from '@angular/router';

import { EtudiantComponent } from './etudiant.component';

const routes: Routes = [
  {
    path: '',
    component: EtudiantComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

export const EtudiantRoutingRoutes = RouterModule.forChild(routes);
