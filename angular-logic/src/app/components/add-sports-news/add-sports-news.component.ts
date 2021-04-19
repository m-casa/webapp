import { Component, OnInit } from '@angular/core';
import { ISports } from 'src/app/interfaces/sports';
import { SportsService } from 'src/app/services/sports.service';
import { SportsComponent } from '../sports/sports.component';

@Component({
  selector: 'app-add-sports-news',
  templateUrl: './add-sports-news.component.html',
  styleUrls: ['./add-sports-news.component.scss']
})
export class AddSportsNewsComponent implements OnInit {

  constructor(private sports : SportsService) { }

  newSportsNews : ISports = {
    title : "",
    description : "",
    url : "",
    img : "",
    publishedAt : ""
  }

  ngOnInit(): void {
  }

  addSportsNews(){
    console.log(this.newSportsNews)
    // TODO: Add sports news data to mongodb
    // this.sports.addSportsNews(this.newSportsNews) // Send data to service which will call the api to update mongodb. Ready for mongodb.
  }

  resetForm(){
    this.newSportsNews.title = "";
    this.newSportsNews.description = "";
    this.newSportsNews.url = "";
    this.newSportsNews.img = "";
    this.newSportsNews.publishedAt = "";
  }

}
