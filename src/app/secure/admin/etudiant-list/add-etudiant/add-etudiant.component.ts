import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Etudiant } from 'src/app/shared/models/Etudiant.model';
import { EtudiantService } from 'src/app/secure/services/etudiant.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss'],
})
export class AddEtudiantComponent implements OnInit {
  etudiantForm: FormGroup;
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.etudiantForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      nomControl: [null, [Validators.required]],
      prenomControl: [null, [Validators.required]],
      usernameControl: [null, [Validators.required]],
      passwordControl: [null, [Validators.required]],
    });
  }

  submitEtudiant(): void {
    if (this.etudiantForm.valid) {
      const inputValues = this.etudiantForm.getRawValue();
      const etudiant: Etudiant = {
        firstname: inputValues.nomControl,
        lastname: inputValues.prenomControl,
        username: inputValues.usernameControl,
        password: inputValues.passwordControl,
      };
      this.etudiantService.createEtudiant(etudiant).subscribe((data) => {
        if (data) {
          this.snackBar.open('Etudiant a été créé avec succès', 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
          this.router.navigate(['./'], { relativeTo: this.route.parent });
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
