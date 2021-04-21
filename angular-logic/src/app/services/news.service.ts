import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  selectedNews: any;

  constructor(private http: HttpClient) { }

  addNews(news) {
    return this.http.post('http://localhost:3000/add-news', news);
  }

  listNews() {
    return this.http.get('http://localhost:3000/list-news');
  }

  editNews(news) {
    this.selectedNews = news;
  }

  updateNews(news) {
    return this.http.post('http://localhost:3000/update-news', news);
  }

  deleteNews(news) {
    console.log(news)
    return this.http.post('http://localhost:3000/delete-news', news);
  }
}
