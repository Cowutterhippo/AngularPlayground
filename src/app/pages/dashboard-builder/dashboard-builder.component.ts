import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-builder',
  templateUrl: './dashboard-builder.component.html',
  styleUrls: ['./dashboard-builder.component.scss']
})
export class DashboardBuilderComponent {

  tile1 = {
    'title': 'Tile 1',
    'content': 'Content 1'
  }
}
