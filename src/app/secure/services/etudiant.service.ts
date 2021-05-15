import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Etudiant } from 'src/app/shared/models/Etudiant.model';
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
export class EtudiantService {
  url = environment.apiUrl + environment.ETUDIANT;
  constructor(private http: HttpClient) {}

  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.url, { headers });
  }

  getEtudiant(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.url + id, { headers });
  }

  createEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.url, etudiant, { headers });
  }

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(this.url + etudiant.id, etudiant, {
      headers,
    });
  }

  deleteEtudiant(etudiant: Etudiant): Observable<any> {
    return this.http.delete<any>(this.url + etudiant.id, { headers });
  }
}
