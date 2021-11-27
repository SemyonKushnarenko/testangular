import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingCardComponent } from './heading-card/heading-card.component';
import { NavCardComponent } from './nav-card/nav-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './error404/error404.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingCardComponent,
    NavCardComponent,
    Error404Component,
    NavigatorComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
