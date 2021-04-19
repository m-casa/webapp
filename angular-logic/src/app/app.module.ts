import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportsComponent } from './components/sports/sports.component';
import { AddSportsNewsComponent } from './components/add-sports-news/add-sports-news.component';


@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    AddSportsNewsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
