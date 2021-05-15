import { CommonModule } from '@angular/common';
import { EtudiantComponent } from './etudiant.component';
import { EtudiantRoutingRoutes } from './etudiant-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    EtudiantRoutingRoutes
  ],
  declarations: [EtudiantComponent]
})
export class EtudiantModule { }
