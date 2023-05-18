import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/services/_service.service';

@Injectable()
export class UserRegistrationService extends BaseService {

  public register(formData: any): Observable<any> {
    return this.post(`users/register`, formData);
  }

}
