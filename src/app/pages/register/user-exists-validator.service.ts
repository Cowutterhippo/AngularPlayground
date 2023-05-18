import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, interval, of, timer } from 'rxjs';
import { debounce, map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable()
export class EmailExistsValidator implements AsyncValidator {
  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | any {
    const email = control.value;
    // will replace with actual email
    // need to make this more secure and configurable.
    // this is just a quick and dirty way to get it working.
    return timer(300).pipe(
      // debounce(() => interval(200)),
      switchMap(() => {
        return this.http.post<any>(`${environment.apiBaseUrl}/checkusers`, {payload: email}, { headers: this.headers })
          .pipe(
            map(users => {
              console.log('vaidator response', users);
              return users.exists ? {emailExists: true} : null;
            }
          )
        );
      })
    )
  }
};
