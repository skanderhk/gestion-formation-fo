import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Etudiant } from 'src/app/shared/models/Etudiant.model';
import { EtudiantService } from 'src/app/secure/services/etudiant.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.scss']
})
export class EditEtudiantComponent implements OnInit {
  etudiant$: Observable<Etudiant>;
  etudiant: Etudiant;
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
    this.route.params.subscribe((params) => {
      this.etudiant$ = this.etudiantService.getEtudiant(params.id);
    });
    this.etudiant$?.subscribe(
      (etudiant) => {
        this.etudiant = etudiant;
        this.etudiantForm = this.createForm(etudiant);
      },
      (error) => {
        this.snackBar.open('Etudiant introuvable!', 'OK', {
          duration: 3500,
          panelClass: ['mat-toolbar', 'mat-primary'],
        });
        this.router.navigate(['etudiant-list']);
      }
    );
  }

  createForm(etudiant?: Etudiant): FormGroup {
    return this.fb.group({
      nomControl: [etudiant.firstname, [Validators.required]],
      prenomControl: [etudiant.lastname, [Validators.required]],
      usernameControl: [etudiant.username, [Validators.required]],
      passwordControl: [etudiant.password, [Validators.required]],
    });
  }

  submitEtudiant(): void {
    if (this.etudiantForm.valid) {
      const inputValues = this.etudiantForm.getRawValue();
      const etudiant: Etudiant = {
        id: this.etudiant.id,
        firstname: inputValues.nomControl,
        lastname: inputValues.prenomControl,
        username: inputValues.usernameControl,
        password: inputValues.passwordControl,
      };
      this.etudiantService.updateEtudiant(etudiant).subscribe((data) => {
        if (data) {
          this.snackBar.open('Etudiant modifié avec succès', 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
          this.router.navigate(['secure/etudiant/list-etudiant']);
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
