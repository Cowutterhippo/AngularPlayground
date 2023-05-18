import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults: any;
  onSearchResultsChanged: BehaviorSubject<any>;

  typeAheadResults: any;
  onTypeAheadResultsChanged: BehaviorSubject<any>;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.onSearchResultsChanged = new BehaviorSubject({});
    this.onTypeAheadResultsChanged = new BehaviorSubject({});
   }

  public typeAhead(query: string) {
    return new Promise((resolve, reject) => {
      this._httpClient.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyC4M4Q4OxGxZb9X9q3qB8g1f4w4J4Q4Q4Q&cx=002475718719642950859:9t9s7tj8n2c&q=' + query)
      .subscribe((response: any) => {
        this.typeAheadResults = response.items;
        this.onTypeAheadResultsChanged.next(this.typeAheadResults);
        resolve(response.items);
      }, reject);
    });
  }

  public search(query: string, numberOfResults: number) {
    return new Promise((resolve, reject) => {
      this._httpClient.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyC4M4Q4OxGxZb9X9q3qB8g1f4w4J4Q4Q4Q&cx=002475718719642950859:9t9s7tj8n2c&q=' + query + '&num=' + numberOfResults)
      .subscribe((response: any) => {
        this.searchResults = response.items;
        this.onSearchResultsChanged.next(this.searchResults);
        resolve(response.items);
      }, reject);
  }


)}}
