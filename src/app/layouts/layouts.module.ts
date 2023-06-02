import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VerticalLayoutComponent } from './vertical/vertical.component';
import { HeaderComponent } from './header/header.component';
import { CommonDirectives } from '../shared/directives/common-directives.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CommonDirectives,
    RouterModule
  ],
  declarations: [ 
    VerticalLayoutComponent,
    NavBarComponent, 
    FooterComponent, 
    SidebarComponent, 
    HeaderComponent,
    ContentComponent
  ],
  exports: [VerticalLayoutComponent]
})
export class LayoutsModule { }
