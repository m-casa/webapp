import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  news = {
    newsType: "regular",
    title: "",
    description: "",
    url: "",
    img: "",
    publishedAt: ""
  };

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
  }

  addNews() {
    this.newsService.addNews(this.news).subscribe((response: any) => {
    }, (error) => {
      this.router.navigateByUrl("/not-found");
      return error;
    });
    this.router.navigateByUrl("/list-news");
  }

}
