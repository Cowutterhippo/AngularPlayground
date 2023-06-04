import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public open = false;
  public searchInput = 'perform site search';

  constructor(private router: Router) { }
  openSidebar() {
    this.open = !this.open;
  }

  spSearch() {
    // need to figure out a cool way to pass the search terms and display the results. 
    // this is a novel way of doing it and seems like a pattern to explore.
    this.router.navigate([{ outlets: { sidePanel: ['search'] } }]);
  }

}
