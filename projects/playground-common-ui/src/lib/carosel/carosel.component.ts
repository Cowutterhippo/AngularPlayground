import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {

  @Input() listLength: number = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  public Items = [{'name': 'item1'}, {'name': 'item2'}, {'name': 'item3'}, {'name': 'item4'}, {'name': 'item5'}];
  public activeIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  shiftLeft() {
    console.log('shiftLeft()'+ this.activeIndex);
    if(this.activeIndex > 0) {
      this.activeIndex--;
      this.activeIndexChange.emit(this.activeIndex);

    }
  }

  shiftRight() {
    console.log('shiftLeft()' + this.activeIndex);

    if(this.activeIndex < this.listLength) {
      this.activeIndex++;
      this.activeIndexChange.emit(this.activeIndex);
    }
  }

}
