import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {
  news: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.news = this.newsService.selectedNews;
    if (this.news == null) {
      this.router.navigateByUrl("/list-news");
    }
  }

  updateNews() {
    this.newsService.updateNews(this.news).subscribe((response: any) => {
    }, (error) => {
      this.router.navigateByUrl("/not-found");
      return error;
    });
    this.router.navigateByUrl("/list-news");
  }

}
