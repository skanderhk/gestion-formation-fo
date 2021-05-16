import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Admin } from 'src/app/shared/models/Admin.model';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  url = environment.apiUrl + environment.ADMIN;
  constructor(private http: HttpClient, private configService: ConfigService) {}

  getAdmins(): Observable<Admin[]> {
    return this.http
      .get<Admin[]>(this.url, { headers })
      .pipe(catchError(this.configService.handleError));
  }

  getAdmin(id: number): Observable<Admin> {
    return this.http
      .get<Admin>(this.url + id, { headers })
      .pipe(catchError(this.configService.handleError));
  }

  createAdmin(admin: Admin): Observable<Admin> {
    return this.http
      .post<Admin>(this.url, admin, { headers })
      .pipe(catchError(this.configService.handleError));
  }

  updateAdmin(admin: Admin): Observable<Admin> {
    return this.http
      .put<Admin>(this.url + admin.id, admin, { headers })
      .pipe(catchError(this.configService.handleError));
  }

  deleteAdmin(admin: Admin): Observable<any> {
    return this.http
      .delete<any>(this.url + admin.id, { headers })
      .pipe(catchError(this.configService.handleError));
  }
}
