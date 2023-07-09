import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dash-tile',
  templateUrl: './dash-tile.component.html',
  styleUrls: ['./dash-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashTileComponent {

  @Input('item') item: any;

  public open = false;
  
  constructor() { }

  toggleDropDown($event: any) {
    console.log($event);
    this.open = !this.open;
  }

}
