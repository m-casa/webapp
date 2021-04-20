import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSportsNewsComponent } from './components/add-sports-news/add-sports-news.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { ListNewsComponent } from './components/news/list-news/list-news.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SportsComponent } from './components/sports/sports.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {
    path: "add-news",
    component: AddNewsComponent
  },
  {
    path: "list-news",
    component: ListNewsComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
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
    path: "chat",
    component: ChatComponent
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
