import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlashCard } from '../flash-card/flash-card.interface';
import { FlashCardService } from './flash-card.service';

@Injectable({ providedIn: 'root'})
export class FlashCardResolver implements Resolve<any> {
  constructor(private flashCardService: FlashCardService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.flashCardService.getFlashCards();
  }
}
