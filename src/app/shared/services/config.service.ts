import { Injectable, NgZone } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private snackBar: MatSnackBar, public zone: NgZone) {}

  public handleError(error: HttpErrorResponse): Observable<never> {
    let message: string;
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      message = 'An error occurred: ' + error.error;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      message = `${error.status}: ${error.error}`;
    }
    this.zone?.runOutsideAngular(() => {
      this.snackBar.open(message, 'OK', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-warn'],
      });
    });
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
