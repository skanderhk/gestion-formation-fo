import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Note } from 'src/app/shared/models/Note.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  url = environment.apiUrl + environment.NOTE;
  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url, { headers });
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(this.url + id, { headers });
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.url, note, { headers });
  }

  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(this.url + note.id, note, {
      headers,
    });
  }

  deleteNote(note: Note): Observable<any> {
    return this.http.delete<any>(this.url + note.id, { headers });
  }
}
