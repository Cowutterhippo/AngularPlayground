import { Injectable } from "@angular/core";
import { BaseService } from "./_service.service";
import { HttpClient } from "@angular/common/http";
@Injectable({providedIn: 'root'})
export class AuthService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

  public getToken(): any {
    return localStorage.getItem('token');
  }

  public setToken(token: any): void {}

  public login(formData: any): any {
    this.post('users/login', formData).subscribe((result: any) => {
      localStorage.setItem('token', result.token);
    });
  }
}
