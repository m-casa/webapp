import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  loggedIn: false;

  constructor(private userService: UserService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getLoginStatus();
      }
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.loggedIn = false;
    this.userService.loggedIn = false;
    window.localStorage.removeItem("access-token");
  }

  getLoginStatus() {
    this.userService.getLoginStatus();
    this.loggedIn = this.userService.loggedIn;
  }

}
