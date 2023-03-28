import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashCardsComponent } from './flash-cards.component';
import { RouterModule, Routes } from '@angular/router';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { CaroselModule } from '../carosel/carosel.module';
import { SearchModule } from '../search/search.module';

const routes: Routes = [
  {
      path     : '',
      component: FlashCardsComponent,
  }
];

@NgModule({
  declarations: [
    FlashCardsComponent,
    FlashCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CaroselModule,
    SearchModule
  ]
})
export class FlashCardsModule { }
