import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ISports } from 'src/app/interfaces/sports';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  constructor(private sports : SportsService, private http : HttpClient) { }

  sportsNewsList : any 
  
  ngOnInit(): void {
    const observableForSportsNews = this.sports.getSportsNews();
    observableForSportsNews.subscribe((res)=>{
      this.sportsNewsList = res;
    })
  }

}
