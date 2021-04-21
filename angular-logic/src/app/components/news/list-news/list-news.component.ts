import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  list = [];
  search = {
    criteria: ""
  };

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.listNews();
  }

  listNews() {
    this.list = [];

    this.newsService.listNews().subscribe((response: any) => {
      if (this.search.criteria == "") {
        this.list = response.list;
      }
      else {
        response.list.forEach(article => {
          if (article.title.toLowerCase().includes(this.search.criteria.toLowerCase())) {
            this.list.push(article);
          }
        });
      }
    });
  }

  editNews(news) {
    this.newsService.editNews(news);
    this.router.navigateByUrl("/edit-news");
  }

  deleteNews(news) {
    this.newsService.deleteNews(news).subscribe((response: any) => {
      this.list = [];
      this.list = response.list;
    }, (error) => {
      this.router.navigateByUrl("/not-found");
      return error;
    });
  }

  searchFor() {
    this.listNews();
  }
}
