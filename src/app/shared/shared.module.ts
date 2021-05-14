import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, HttpClientModule],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, HttpClientModule],
})
export class SharedModule {}
