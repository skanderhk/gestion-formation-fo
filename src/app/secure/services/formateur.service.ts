import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Formateur } from 'src/app/shared/models/Formateur.model';
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
export class FormateurService {
  url = environment.apiUrl + environment.FORMATEUR;
  constructor(private http: HttpClient) {}

  getFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(this.url, { headers });
  }

  getFormateur(id: number): Observable<Formateur> {
    return this.http.get<Formateur>(this.url + id, { headers });
  }

  createFormateur(formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(this.url, formateur, { headers });
  }

  updateFormateur(formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>(this.url + formateur.id, formateur, {
      headers,
    });
  }

  deleteFormateur(formateur: Formateur): Observable<any> {
    return this.http.delete<any>(this.url + formateur.id, { headers });
  }
}
