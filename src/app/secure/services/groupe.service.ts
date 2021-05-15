import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Groupe } from 'src/app/shared/models/Groupe.model';
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
export class GroupeService {
  url = environment.apiUrl + environment.GROUPE;
  constructor(private http: HttpClient) {}

  getGroupes(): Observable<Groupe[]> {
    return this.http.get<Groupe[]>(this.url, { headers });
  }

  getGroupe(id: number): Observable<Groupe> {
    return this.http.get<Groupe>(this.url + id, { headers });
  }

  createGroupe(groupe: Groupe): Observable<Groupe> {
    return this.http.post<Groupe>(this.url, groupe, { headers });
  }

  updateGroupe(groupe: Groupe): Observable<Groupe> {
    return this.http.put<Groupe>(this.url + groupe.id, groupe, {
      headers,
    });
  }

  deleteGroupe(groupe: Groupe): Observable<any> {
    return this.http.delete<any>(this.url + groupe.id, { headers });
  }
}
