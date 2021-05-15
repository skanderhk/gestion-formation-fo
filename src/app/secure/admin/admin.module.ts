import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutes
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
