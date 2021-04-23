import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean;

  constructor(private userService: UserService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("page refreshed");
        this.getLoginStatus();
      }
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.loggedIn = false;
    window.localStorage.removeItem("access-token");
  }

  getLoginStatus() {
    this.userService.getLoginStatus().subscribe((response: any) => {
      this.loggedIn = response;
    });
  }

}
