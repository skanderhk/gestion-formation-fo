import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleDialogComponent } from './components/simpleDialog/simpleDialog.component';

@NgModule({
  declarations: [SimpleDialogComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, HttpClientModule],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, HttpClientModule],
  entryComponents: [SimpleDialogComponent],
})
export class SharedModule {}
