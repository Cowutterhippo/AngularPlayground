import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashCardService } from './services/flash-card.service';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.scss'],
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
    private route: ActivatedRoute,
    private flashCardService: FlashCardService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=> {
      this.cards = data['cards'];
    })
  }

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

  createNewFlashCard($event: any) {
      this.flashCardService.addFlashCard($event).subscribe((res)=> {
        this.cards.push(res)
      })
  }
}
