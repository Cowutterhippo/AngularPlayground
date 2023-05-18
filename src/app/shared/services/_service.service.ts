import { PagesComponent } from './../../pages/pages.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  protected baseUrl = environment.apiBaseUrl;
  constructor(protected http: HttpClient) { }

  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.getFullUrl(url), this.httpOptions);
  }

  protected post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(this.getFullUrl(url), data, this.httpOptions);
  }

  protected put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(this.getFullUrl(url), data, this.httpOptions);
  }

  protected delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.getFullUrl(url), this.httpOptions);
  }

  protected patch<T>(url: string, data: any): Observable<T> {
    return this.http.patch<T>(this.getFullUrl(url), data, this.httpOptions);
  }

  protected head<T>(url: string): Observable<T> {
    return this.http.head<T>(this.getFullUrl(url), this.httpOptions);
  }

  protected options<T>(url: string): Observable<T> {
    return this.http.options<T>(this.getFullUrl(url), this.httpOptions);
  }

  protected getFullUrl(url: string): string {
    return `${this.baseUrl}/${url}`;
  }

  protected handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
