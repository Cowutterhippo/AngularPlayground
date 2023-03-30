import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
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
