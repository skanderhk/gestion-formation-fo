import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SimpleDialogInterface {
  title: string;
  message: string;
  buttonLabel: string;
}

@Component({
  selector: 'app-simpleDialog',
  templateUrl: './simpleDialog.component.html',
  styleUrls: ['./simpleDialog.component.scss'],
})
export class SimpleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SimpleDialogInterface
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  confirm(): void {}
}
