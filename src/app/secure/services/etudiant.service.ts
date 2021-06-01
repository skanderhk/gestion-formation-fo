import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ConfigService } from 'src/app/shared/services/config.service';
import { Etudiant } from 'src/app/shared/models/Etudiant.model';
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
export class EtudiantService {
  url = environment.apiUrl + environment.ETUDIANT;
  constructor(private http: HttpClient, private configService: ConfigService) {}

  getEtudiants(): Observable<Etudiant[]> {
    return this.http
      .get<Etudiant[]>(this.url, { headers })
      .pipe(catchError(this.configService.handleError));
  }

  getEtudiant(id: number): Observable<Etudiant> {
    return this.http
      .get<Etudiant>(this.url + id, { headers })
      .pipe(catchError(this.configService.handleError));
  }

  createEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http
      .post<Etudiant>(this.url, etudiant, { headers })
      .pipe(catchError(this.configService.handleError));
  }

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http
      .put<Etudiant>(this.url + etudiant.id, etudiant, {
        headers,
      })
      .pipe(catchError(this.configService.handleError));
  }

  deleteEtudiant(etudiant: Etudiant): Observable<any> {
    return this.http
      .delete<any>(this.url + etudiant.id, { headers })
      .pipe(catchError(this.configService.handleError));
  }
}
