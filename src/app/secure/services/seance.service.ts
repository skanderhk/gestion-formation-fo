import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seance } from 'src/app/shared/models/Seance.model';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class SeanceService {
  url = environment.apiUrl + environment.SEANCE;
  constructor(private http: HttpClient) {}

  getSeances(): Observable<Seance[]> {
    return this.http.get<Seance[]>(this.url, { headers });
  }

  getSeance(id: number): Observable<Seance> {
    return this.http.get<Seance>(this.url + id, { headers });
  }

  createSeance(seance: Seance): Observable<Seance> {
    return this.http.post<Seance>(this.url, seance, { headers });
  }

  updateSeance(seance: Seance): Observable<Seance> {
    return this.http.put<Seance>(this.url + seance.id, seance, {
      headers,
    });
  }

  deleteSeance(seance: Seance): Observable<any> {
    return this.http.delete<any>(this.url + seance.id, { headers });
  }
}
