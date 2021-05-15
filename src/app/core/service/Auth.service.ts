import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  TokenResponse,
  User,
  UserLogin,
} from 'src/app/shared/models/User.model';

import { Injectable } from '@angular/core';
import { TokenStorageService } from './TokenStorage.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  login(loginObject: UserLogin): Observable<string> {
    return this.http
      .post<TokenResponse>(this.url + environment.USER.LOGIN, loginObject, {
        headers,
      })
      .pipe(map((response) => response.token));
  }

  connectedUser(): Observable<User> {
    return this.http.get<User>(this.url + environment.USER.CONNECTED, {
      headers,
    });
  }

  isAuthorized(): Observable<boolean> {
    return of(!!this.tokenStorage.getToken());
  }
}
