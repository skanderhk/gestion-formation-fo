import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Matiere } from 'src/app/shared/models/Matiere.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class MatiereService {
  url = environment.apiUrl + environment.MATIERE;
  constructor(private http: HttpClient) {}

  getMatieres(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(this.url, { headers });
  }

  getMatiere(id: number): Observable<Matiere> {
    return this.http.get<Matiere>(this.url + id, { headers });
  }

  createMatiere(matiere: Matiere): Observable<Matiere> {
    return this.http.post<Matiere>(this.url, matiere, { headers });
  }

  updateMatiere(matiere: Matiere): Observable<Matiere> {
    return this.http.put<Matiere>(this.url + matiere.id, matiere, {
      headers,
    });
  }

  deleteMatiere(matiere: Matiere): Observable<any> {
    return this.http.delete<any>(this.url + matiere.id, { headers });
  }
}
