import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SportsComponent } from './components/sports/sports.component';
import { AddSportsNewsComponent } from './components/add-sports-news/add-sports-news.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { ListNewsComponent } from './components/news/list-news/list-news.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditNewsComponent } from './components/news/edit-news/edit-news.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MustMatchDirective } from './directives/must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SportsComponent,
    AddSportsNewsComponent,
    AddNewsComponent,
    ListNewsComponent,
    LoginComponent,
    RegisterComponent,
    ImageSliderComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    EditNewsComponent,
    HomePageComponent,
    FooterComponent,
    NavBarComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
