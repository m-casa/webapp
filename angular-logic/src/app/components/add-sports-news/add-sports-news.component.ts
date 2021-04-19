import { Component, OnInit } from '@angular/core';
import { ISports } from 'src/app/interfaces/sports';

@Component({
  selector: 'app-add-sports-news',
  templateUrl: './add-sports-news.component.html',
  styleUrls: ['./add-sports-news.component.scss']
})
export class AddSportsNewsComponent implements OnInit {

  constructor() { }

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
    // TODO:
    // Add sports news data to mongodb
    // Make sure sports page gets updated
  }

  resetForm(){
    this.newSportsNews.title = "";
    this.newSportsNews.description = "";
    this.newSportsNews.url = "";
    this.newSportsNews.img = "";
    this.newSportsNews.publishedAt = "";
  }

}
