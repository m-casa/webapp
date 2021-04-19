import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(/*private http : HttpClient*/) { }

  /**
   * returns sportsNews located on mongodb
   */
  getSportsNews(){
    //return this.http.get("http://localhost:3000/sports-news")
  }

  /**
   * Add new sports story to mongodb
   * @param data newSportNews object. Includes title, description, web url, img url, and publishedAt 
   */
  addSportsNews(data){
    //this.http/post("http://localhost:3000/add-sports-news", data)
  }
}
