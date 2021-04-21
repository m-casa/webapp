import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SportsComponent } from './components/sports/sports.component';
import { AddSportsNewsComponent } from './components/add-sports-news/add-sports-news.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { ListNewsComponent } from './components/news/list-news/list-news.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditNewsComponent } from './components/news/edit-news/edit-news.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SportsComponent,
    AddSportsNewsComponent,
    AddNewsComponent,
    ListNewsComponent,
    ImageSliderComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    EditNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
