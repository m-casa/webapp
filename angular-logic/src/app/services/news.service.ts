import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }

  addNews(news) {
    return this.http.post('http://localhost:3000/add-news', news);
  }

  listNews() {
    return this.http.get('http://localhost:3000/list-news');
  }
}
