import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(/*private http : HttpClient*/) { }

  getSportsNews(){
    //return this.http.get("http://localhost:3000/sports-news")
  }
}
