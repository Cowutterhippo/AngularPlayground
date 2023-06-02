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

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NavLinksComponent,
   ],
  imports: [
    LayoutsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
