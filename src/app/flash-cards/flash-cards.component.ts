import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent {
  public searchIsOpen: boolean = false;


  constructor(@Inject(DOCUMENT) private document: Document) { }


  public cards = [  {    "question": "What is the capital of France?",    "answer": "Paris"  },  {    "question": "What is the largest planet in our solar system?",    "answer": "Jupiter"  },  {    "question": "Who wrote the novel 'To Kill a Mockingbird'?",    "answer": "Harper Lee"  },  {    "question": "What is the tallest mountain in the world?",    "answer": "Mount Everest"  },  {    "question": "What is the chemical symbol for gold?",    "answer": "Au"  },
  {    "question": "What is the capital of France?",    "answer": "Paris"  },  {    "question": "What is the largest planet in our solar system?",    "answer": "Jupiter"  },  {    "question": "Who wrote the novel 'To Kill a Mockingbird'?",    "answer": "Harper Lee"  },  {    "question": "What is the tallest mountain in the world?",    "answer": "Mount Everest"  },  {    "question": "What is the chemical symbol for gold?",    "answer": "Au"  }
]
  public view: string = 'grid';
  public activeIndex: number = 0;

  public batchSize: number = 5;

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
    console.log(container);
    if(container == null) return;
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

}
