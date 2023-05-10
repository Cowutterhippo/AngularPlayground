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
  @Input()
  rows: Array<ITableRow | any> = [];
}

export interface ITableColumn {
  header: string;

}

export interface ITableRow {
  value: any;
}
