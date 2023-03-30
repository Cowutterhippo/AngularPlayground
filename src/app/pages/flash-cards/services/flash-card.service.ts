import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

export interface FlashCard {
  id: number;
  question: string;
}

@Injectable()
export class FlashCardService {

  private devUrl = 'http://localhost:3000';
  private prodUrl = 'https://flash-cards-api.herokuapp.com';

  constructor(
    private _httpClient: HttpClient
  ) {

  }

  getFlashCards(): Observable<any> {
    return this._httpClient.get(`${this.devUrl}/flash-cards`);
  }

  addFlashCard(flashCard:FlashCard): Observable<any> {
    return this._httpClient.post(`${this.devUrl}/flash-cards`, flashCard);
  }

  deleteFlashCard(id: number): Observable<any> {
    return this._httpClient.delete(`${this.devUrl}/flash-cards/${id}`);
  }

}
