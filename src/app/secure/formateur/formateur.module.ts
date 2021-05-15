import { CommonModule } from '@angular/common';
import { FormateurComponent } from './formateur.component';
import { FormateurRoutingRoutes } from './formateur-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormateurRoutingRoutes],
  declarations: [FormateurComponent],
})
export class FormateurModule {}
