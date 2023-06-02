import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavLinksComponent } from './sp-experience/nav-links/nav-links.component';

const routes: Routes = [
  { path: 'register', loadChildren: ()=> import('./pages/register/register.module').then(m=>m.RegisterModule)},
  { path: 'login', loadChildren: ()=> import('./pages/login/login.module').then(m=>m.LoginModule)},
  { path: 'temp-conversion', loadChildren: ()=> import('./pages/temp-converted/temp-converted.module').then(m=>m.TempConvertedModule)},
  { path: 'flash-cards', loadChildren: ()=> import('./pages/flash-cards/flash-cards.module').then(m=>m.FlashCardsModule)},
  { path: 'nav/:name', component: NavLinksComponent, outlet: 'sidebar'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
