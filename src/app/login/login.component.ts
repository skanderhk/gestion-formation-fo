import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/service/Auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../core/service/TokenStorage.service';
import { UserLogin } from '../shared/models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public hide = true;
  public loginForm: FormGroup;
  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}


  ngOnInit(): void {
    this.loginForm = this.createFrom();
  }

  createFrom(): FormGroup {
    return this.fb.group({
      usernameControl: [null, [Validators.required]],
      passwordControl: [null, [Validators.required]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const loginInputs = this.loginForm.getRawValue();
      const loginObject: UserLogin = {
        username: loginInputs.usernameControl,
        password: loginInputs.passwordControl,
      };
      const token$ = this.authService.login(loginObject);
      this.subscription = token$.subscribe((token) => {
        this.tokenStorageService.setToken(token);
        this.router.navigate(['secure']);
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
