import { Component, OnInit } from '@angular/core';
import { ISports } from 'src/app/interfaces/sports';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  constructor(private sports : SportsService) { }

  sportsNewsList = this.sports.getSportsNews() // Get sportsNews data from mongodb. Ready for mongodb implementation
  // Console.log is in ngOnInit()

  /*
  sportsNewsList : ISports[] = [ // DUMMY DATA. REPLACE WITH CALL FROM API 
    {
      title : "Green Bay Packers win Super Bowl!",
      description : "The Green Bay Packers take home the championship",
      url : "/packers-win-super-bowl",
      img : "../../../assets/images/sports/football.jpeg",
      publishedAt : "ESPN"
    },
    {
      title : "Minnesota Vikings Struggle as Usual",
      description : "The Minnesota Vikings seem to struggle with knowing the difference between left and right",
      url : "/minnesota-vikings-struggle-as-usual",
      img : "../../../assets/images/sports/vikings.jpeg",
      publishedAt : "ESPN"
    },
    {
      title : "Student sets new high school track record!",
      description : "A student at Generic Highschool has set a new track record!",
      url : "/student-sets-new-high-school-track-record",
      img : "../../../assets/images/sports/track-and-field.jpg",
      publishedAt : "ESPN"
    },
    {
      title : "Shark Found in Local Pool",
      description : "A lost shark found its way into the local pool",
      url : "/shark-found-in-local-pool",
      img : "../../../assets/images/sports/pool.jpeg",
      publishedAt : "ESPN"
    },
    
    {
      title : "High School Girl's Soccer Team Wins State",
      description : "The girl's soccer team at Average High School wins state championship",
      url : "/high-school-girls-soccer-team-wins-state",
      img : "../../../assets/images/sports/soccer.jpeg",
      publishedAt : "ESPN"
    },
    {
      title : "Pole Snaps Spectacularly in Regionals Track and Field Event",
      description : "The pole from 17 year old Hugh Mann's pole snaps as he goes for his personal best",
      url : "/pole-snaps-spectacularly-in-regionals-track-and-field-event",
      img : "../../../assets/images/sports/polevault.jpeg",
      publishedAt : "ESPN"
    }
  ]

  */
  ngOnInit(): void {
    console.log(this.sportsNewsList)
  }

}
