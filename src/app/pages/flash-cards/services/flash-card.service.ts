import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

export interface FlashCard {
  id: number;
  question: string;
}

@Injectable()
export class FlashCardService {

  private devUrl = 'http://localhost:3000/api';
  private prodUrl = 'https://flash-cards-api.herokuapp.com';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private _httpClient: HttpClient
  ) {

  }

  getFlashCards(): Observable<any> {
    return this._httpClient.get(`${this.devUrl}/flashcards`);
  }

  addFlashCard(flashCard: any): Observable<any> {
    const headers = this.headers
    return this._httpClient.post(`${this.devUrl}/flashcards`, flashCard, { headers });
  }
  deleteFlashCard(id: number): Observable<any> {
    return this._httpClient.delete(`${this.devUrl}/flashcards/${id}`);
  }

}
