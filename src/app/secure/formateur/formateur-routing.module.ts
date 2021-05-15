import { RouterModule, Routes } from '@angular/router';

import { FormateurComponent } from './formateur.component';

const routes: Routes = [
  {
    path: '',
    component: FormateurComponent,
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

export const FormateurRoutingRoutes = RouterModule.forChild(routes);
