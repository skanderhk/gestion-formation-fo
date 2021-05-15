import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FichePresence } from 'src/app/shared/models/FichePresence.model';
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
export class FichePresenceService {
  url = environment.apiUrl + environment.FICHEPRESENCE;
  constructor(private http: HttpClient) {}

  getFichePresences(): Observable<FichePresence[]> {
    return this.http.get<FichePresence[]>(this.url, { headers });
  }

  getFichePresence(id: number): Observable<FichePresence> {
    return this.http.get<FichePresence>(this.url + id, { headers });
  }

  createFichePresence(fichePresence: FichePresence): Observable<FichePresence> {
    return this.http.post<FichePresence>(this.url, fichePresence, { headers });
  }

  updateFichePresence(fichePresence: FichePresence): Observable<FichePresence> {
    return this.http.put<FichePresence>(
      this.url + fichePresence.id,
      fichePresence,
      {
        headers,
      }
    );
  }

  deleteFichePresence(fichePresence: FichePresence): Observable<any> {
    return this.http.delete<any>(this.url + fichePresence.id, {
      headers,
    });
  }
}
