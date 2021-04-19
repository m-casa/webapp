import { Component, OnInit } from '@angular/core';
import { ISports } from 'src/app/interfaces/sports';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sportsNewsList : ISports[] = [ // DUMMY DATA. REPLACE WITH CALL FROM API EITHER HERE OR IN A SERVICE
    {
      title : "Packers win Super Bowl LXV!",
      description : "The Green Bay Packers take home the championship",
      url : "/packers-win-super-bowl-lxv",
      img : "",
      publishedAt : "ESPN"
    },
    {
      title : "Packers win Super Bowl LXV!",
      description : "The Green Bay Packers take home the championship",
      url : "/packers-win-super-bowl-lxv",
      img : "",
      publishedAt : "ESPN"
    },
    {
      title : "Packers win Super Bowl LXV!",
      description : "The Green Bay Packers take home the championship",
      url : "/packers-win-super-bowl-lxv",
      img : "",
      publishedAt : "ESPN"
    },
    {
      title : "Packers win Super Bowl LXV!",
      description : "The Green Bay Packers take home the championship",
      url : "/packers-win-super-bowl-lxv",
      img : "",
      publishedAt : "ESPN"
    },
    {
      title : "Minnesota Vikings struggle as usual",
      description : "The Minnesota Vikings seem to struggle with knowing the difference between left and right",
      url : "/minnesota-vikings-struggle-as-usual",
      img : "",
      publishedAt : "ESPN"
    }
  ]

  constructor(private sports : SportsService) { }

  ngOnInit(): void {
  }

}
