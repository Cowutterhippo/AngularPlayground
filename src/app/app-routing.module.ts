import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'temp-conversion', loadChildren: ()=> import('./pages/temp-converted/temp-converted.module').then(m=>m.TempConvertedModule) },
  { path: 'flash-cards', loadChildren: ()=> import('./pages/flash-cards/flash-cards.module').then(m=>m.FlashCardsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
