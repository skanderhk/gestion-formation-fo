import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Admin } from 'src/app/shared/models/Admin.model';
import { AdminService } from 'src/app/secure/services/admin.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss'],
})
export class EditAdminComponent implements OnInit {
  admin$: Observable<Admin>;
  admin: Admin;
  adminForm: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.admin$ = this.adminService.getAdmin(params.id);
    });
    this.admin$?.subscribe(
      (admin) => {
        this.admin = admin;
        this.adminForm = this.createForm(admin);
      },
      (error) => {
        this.snackBar.open('Admin introuvable!', 'OK', {
          duration: 3500,
          panelClass: ['mat-toolbar', 'mat-primary'],
        });
        this.router.navigate(['admin-list']);
      }
    );
  }

  createForm(admin?: Admin): FormGroup {
    return this.fb.group({
      nomControl: [admin.nom, [Validators.required]],
      prenomControl: [admin.prenom, [Validators.required]],
      usernameControl: [admin.username, [Validators.required]],
      passwordControl: [admin.password, [Validators.required]],
    });
  }

  submitAdmin(): void {
    if (this.adminForm.valid) {
      const inputValues = this.adminForm.getRawValue();
      const admin: Admin = {
        id: this.admin.id,
        nom: inputValues.nomControl,
        prenom: inputValues.prenomControl,
        username: inputValues.usernameControl,
        password: inputValues.passwordControl,
      };
      this.adminService.updateAdmin(admin).subscribe((data) => {
        if (data) {
          this.snackBar.open('Admin modifié avec succès', 'OK', {
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
