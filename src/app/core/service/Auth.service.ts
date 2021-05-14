import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenResponse, User, UserLogin } from 'src/app/shared/models/User.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private http: HttpClient) {}

  login(loginObject: UserLogin): Observable<string> {
    return this.http
      .post<TokenResponse>(this.url + environment.USER.LOGIN, loginObject, { headers })
      .pipe(map((response) => response.token));
  }

  connectedUser(): Observable<User> {
    return this.http.get<User>(this.url + environment.USER.CONNECTED, { headers });
  }
}
