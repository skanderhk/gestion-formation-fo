import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Admin } from 'src/app/shared/models/Admin.model';
import { AdminService } from 'src/app/secure/services/admin.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
})
export class AddAdminComponent implements OnInit {
  adminForm: FormGroup;
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.adminForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      nomControl: [null, [Validators.required]],
      prenomControl: [null, [Validators.required]],
      usernameControl: [null, [Validators.required]],
      emailControl: [null, [Validators.required]],
      passwordControl: [null, [Validators.required]],
    });
  }

  submitAdmin(): void {
    if (this.adminForm.valid) {
      const inputValues = this.adminForm.getRawValue();
      const admin: Admin = {
        firstname: inputValues.nomControl,
        lastname: inputValues.prenomControl,
        username: inputValues.usernameControl,
        email: inputValues.emailControl,
        password: inputValues.passwordControl,
      };
      this.adminService.createAdmin(admin).subscribe((data) => {
        if (data) {
          this.snackBar.open('Admin a été créé avec succès', 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
          this.router.navigate(['secure/admin/list-admin']);
        }
      });
    } else {
      this.snackBar.open('Formulaire invalid', 'OK', {
        duration: 3500,
        panelClass: ['mat-toolbar', 'mat-primary'],
      });
    }
  }

  onBack(): void {
    this.location.back();
  }
}
