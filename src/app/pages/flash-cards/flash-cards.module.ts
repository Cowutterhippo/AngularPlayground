import { FlashCardResolver } from './services/flash-cards.resolver';
import { CreateCardComponent } from './create-card/create-card.component';
import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashCardsComponent } from './flash-cards.component';
import { RouterModule, Routes } from '@angular/router';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { CaroselModule } from 'playground-common-ui';
import { SearchModule } from '../search/search.module';
import { GenericFormsModuleModule } from 'playground-common-ui';
import { FlashCardService } from './services/flash-card.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
      path     : '',
      component: FlashCardsComponent,
      resolve: { cards: FlashCardResolver}
  }
];

@NgModule({
  declarations: [
    FlashCardsComponent,
    FlashCardComponent,
    CreateCardComponent
  ],
  imports: [
    //TODO all things will inherit from the _service that way we don't have multi iport of HttpClientModule
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes),
    CaroselModule,
    SearchModule,
    GenericFormsModuleModule
  ],
  providers: [
    FlashCardService,
    FlashCardResolver
  ]
})
export class FlashCardsModule { }
