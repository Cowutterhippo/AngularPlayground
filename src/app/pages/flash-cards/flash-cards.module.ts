import { CreateCardComponent } from './create-card/create-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashCardsComponent } from './flash-cards.component';
import { RouterModule, Routes } from '@angular/router';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { CaroselModule } from 'common-ui-lib';
import { SearchModule } from '../search/search.module';
import { GenericFormsModuleModule } from 'common-ui-lib';

const routes: Routes = [
  {
      path     : '',
      component: FlashCardsComponent,
  }
];

@NgModule({
  declarations: [
    FlashCardsComponent,
    FlashCardComponent,
    CreateCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CaroselModule,
    SearchModule,
    GenericFormsModuleModule
  ]
})
export class FlashCardsModule { }
