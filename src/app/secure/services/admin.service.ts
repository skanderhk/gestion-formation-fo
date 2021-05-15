import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Admin } from 'src/app/shared/models/Admin.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private http: HttpClient) {}

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.url, { headers });
  }

  getAdmin(id: number): Observable<Admin> {
    return this.http.get<Admin>(this.url + id, { headers });
  }

  createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.url, admin, { headers });
  }

  updateAdmin(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(this.url + admin.id, admin, { headers });
  }

  deleteAdmin(admin: Admin): Observable<any> {
    return this.http.delete<any>(this.url + admin.id, { headers });
  }
}
