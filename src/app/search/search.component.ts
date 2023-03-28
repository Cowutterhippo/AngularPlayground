import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,  AfterViewInit {

  @ViewChild("inputRef", {static: false}) inputRef: ElementRef;

  public results: any = [];

  private query: string = '';
  private numberOfResults: number = 10;
  public searchFormControl: FormControl = new FormControl(this.query, [Validators.required]);

  constructor(
  ) { }



  ngOnInit() {
    this.searchFormControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((value) => {
      this.query = value;
      this.search();
    })

  }

  ngAfterViewInit(): void {
    this.inputRef.nativeElement.focus();
  }

  buildSearchQuery()  {

  }

  search() {
    let results = [
      ...this.results,
      {"title": "Google", "url": "https://www.google.com"},
      {"title": "GitHub", "url": "https://github.com"},
      {"title": "Stack Overflow", "url": "https://stackoverflow.com"},
      {"title": "Wikipedia", "url": "https://www.wikipedia.org/"},
      {"title": "YouTube", "url": "https://www.youtube.com/"},
      {"title": "Twitter", "url": "https://twitter.com/"},
      {"title": "Amazon", "url": "https://www.amazon.com/"},
      {"title": "LinkedIn", "url": "https://www.linkedin.com/"},
      {"title": "Facebook", "url": "https://www.facebook.com/"},
      {"title": "Reddit", "url": "https://www.reddit.com/"}
    ];
    this.results = results;
  }

}

