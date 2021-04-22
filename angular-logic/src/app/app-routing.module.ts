import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSportsNewsComponent } from './components/add-sports-news/add-sports-news.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { ListNewsComponent } from './components/news/list-news/list-news.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SportsComponent } from './components/sports/sports.component';
import { ContactComponent } from './components/contact/contact.component'
import { AboutComponent } from './components/about/about.component'
import { EditNewsComponent } from './components/news/edit-news/edit-news.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: 'contact',
  component: ContactComponent
  },
  {
    path: 'about',
  component: AboutComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: "add-news",
    component: AddNewsComponent
  },
  {
    path: "list-news",
    component: ListNewsComponent
  },
  {
    path: "edit-news",
    component: EditNewsComponent
  },
  {
    path: "sports-news",
    component: SportsComponent
  },
  {
    path: "add-sports-news",
    component: AddSportsNewsComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
