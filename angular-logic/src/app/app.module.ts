import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
// import { SportsComponent } from './components/sports/sports.component';
// import { AboutComponent } from './components/about/about.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { NewsComponent } from './components/news/news.component';
// import { ChatComponent } from './components/chat/chat.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // SportsComponent,
    // AboutComponent,
    // ContactComponent,
    // NewsComponent,
    // ChatComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
