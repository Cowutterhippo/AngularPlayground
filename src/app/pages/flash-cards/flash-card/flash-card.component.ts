import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlashCardComponent implements OnInit {

  @Input() flashCard: any;
  public side = 'front';
  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    this.side = this.side === 'front' ? 'back' : 'front';
  }

}
