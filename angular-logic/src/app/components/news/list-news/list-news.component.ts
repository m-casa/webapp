import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  list = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.listNews();
  }

  listNews() {
    this.newsService.listNews().subscribe((response: any) => {
      this.list = response.list;
    });
  }

}
