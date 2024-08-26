import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  baseUrl = 'https://localhost:7010';
  private http = inject(HttpClient);

  constructor() {}

  getUsers(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http
      .get<any>(`${this.baseUrl}/User`, { headers })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 400) {
      return throwError(
        () =>
          new Error(
            `A aparut o eroare cu statusul ${error.status}, iar eroarea este ${error.error.message}! `
          )
      );
    } else {
      return throwError(() => new Error('A aparut o alta eroare !'));
    }
  }
}
