import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule],
})
export class SharedModule {}
