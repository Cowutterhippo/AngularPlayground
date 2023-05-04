import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent implements OnInit {
  public searchIsOpen: boolean = false;
  public collectionName: string = 'Flash Cards';
  public createNewCard: boolean = false;
  public showCreateForm: boolean = false;

  public cards: any;
  public view: string = 'grid';
  public activeIndex: number = 0;

  public batchSize: number = 5;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=> {
      this.cards = data['cards'];
    })
  }

  // public cards = [{ "question": "What is the capital of France?", "answer": "Paris" }, { "question": "What is the largest planet in our solar system?", "answer": "Jupiter" }, { "question": "Who wrote the novel 'To Kill a Mockingbird'?", "answer": "Harper Lee" }, { "question": "What is the tallest mountain in the world?", "answer": "Mount Everest" }, { "question": "What is the chemical symbol for gold?", "answer": "Au" },
  // { "question": "What is the capital of France?", "answer": "Paris" }, { "question": "What is the largest planet in our solar system?", "answer": "Jupiter" }, { "question": "Who wrote the novel 'To Kill a Mockingbird'?", "answer": "Harper Lee" }, { "question": "What is the tallest mountain in the world?", "answer": "Mount Everest" }, { "question": "What is the chemical symbol for gold?", "answer": "Au" }
  // ]


  changeView(viewType: string): void {
    console.log('changeView()');
    this.view = viewType;
  }

  openCreate() {
    console.log('openCreate()');
  }
  toggleSearch() {
    this.searchIsOpen = !this.searchIsOpen;
  }

  updateIndex($event: number) {
    console.log('updateIndex()');
    console.log($event.valueOf());
    this.activeIndex = $event.valueOf();
  }

  onScroll() {
    const container = document.querySelector('.container');
    if (container == null) return;
    // const scrollPosition = container.scrollTop + container.offsetHeight;
    const scrollHeight = container.scrollHeight;
    // if (scrollPosition === scrollHeight) {
    //   this.loadMoreItems();
    // }
  }

  loadMoreItems() {
    console.log('loadMoreItems()');
    this.cards = this.cards.concat(this.cards);
  }

  toggleCreateCardForm(): void {
    this.showCreateForm = !this.showCreateForm;
    console.log(this.showCreateForm);
  }

}
