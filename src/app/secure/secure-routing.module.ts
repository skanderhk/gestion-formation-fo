import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecureRoutingModule {}
