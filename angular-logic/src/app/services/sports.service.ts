import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ISports } from '../interfaces/sports';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http : HttpClient, private router : Router) { }

  data : any

  /**
   * TODO: verify this logic
   * Return data from api.
   * @returns response from api call
   */
  getSportsNews(){
    return this.http.get("http://localhost:3000/get-sports-news")
  }

  /**
   * Add new sports story to mongodb
   * @param data newSportNews object. Includes title, description, web url, img url, and publishedAt 
   */
  addSportsNews(sportsNewsData){
    let data = {newsType : "sports", title : sportsNewsData.title, description : sportsNewsData.description, url : sportsNewsData.url, 
        img : sportsNewsData.img, publishedAt : sportsNewsData.publishedAt};
    this.http.post("http://localhost:3000/save-sports-news", data).subscribe((response : any)=>{
      console.log(response)
    this.router.navigateByUrl("/sports-news");
    })
  }
}
