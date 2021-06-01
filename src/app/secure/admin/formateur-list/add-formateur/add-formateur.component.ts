import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Formateur } from 'src/app/shared/models/Formateur.model';
import { FormateurService } from 'src/app/secure/services/formateur.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.scss'],
})
export class AddFormateurComponent implements OnInit {
  formateurForm: FormGroup;
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private formateurService: FormateurService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.formateurForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      nomControl: [null, [Validators.required]],
      prenomControl: [null, [Validators.required]],
      usernameControl: [null, [Validators.required]],
      passwordControl: [null, [Validators.required]],
    });
  }

  submitFormateur(): void {
    if (this.formateurForm.valid) {
      const inputValues = this.formateurForm.getRawValue();
      const formateur: Formateur = {
        nom: inputValues.nomControl,
        prenom: inputValues.prenomControl,
        username: inputValues.usernameControl,
        password: inputValues.passwordControl,
      };
      this.formateurService.createFormateur(formateur).subscribe((data) => {
        if (data) {
          this.snackBar.open('Formateur a été créé avec succès', 'OK', {
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
