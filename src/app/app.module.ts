import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';
import { LayoutsModule } from './layouts/layouts.module';
import { httpInterceptorProviders } from './shared/interceptors';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NavLinksComponent } from './sp-experience/nav-links/nav-links.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtools } from '@ngrx/store-devtools';

import { environment } from '../environments/environments';
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NavLinksComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutsModule,
    // StoreModule.forRoot({
    //   // todosFeature: todosFeatureReducer,
    // }),
    // EffectsModule.forRoot([TodosFeatureEffects]),
    // StoreDevtools.instrument(
    //   maxAge: 25,
    //   logOnly: environment.production,
    // ),
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
