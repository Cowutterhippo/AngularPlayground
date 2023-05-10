import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input()
  columns: Array<ITableColumn> = [];

  _rows: Array<ITableRow | any> = [];
  @Input('rows')
  set rows(value: Array<ITableRow| any>) {
    this._rows = value;
    this.updatePage(value.length);
  }
  numberofpages: Array<number>;
  currentpage: number = 1;

  @Input()
  tableLength = 10;

  updatePage(rowlength: number) {
    const pageLength = rowlength/this.tableLength;
    this.numberofpages = Array(pageLength).fill(1);
  }
}

export interface ITableColumn {
  header: string;

}

export interface ITableRow {
  value: any;
}
