import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn: false;

  constructor(private http: HttpClient, private router: Router) { }

  register(user) {
    this.http.post("http://localhost:3000/register", user)
      .subscribe((response: any) => {
      });
    this.router.navigateByUrl("/login");
  }

  login(user) {
    this.http.post("http://localhost:3000/login", user)
      .subscribe((response: any) => {
        console.log(response.accessToken)
        window.localStorage.setItem("access-token", response.accessToken);
        this.router.navigateByUrl("/");
      });
  }

  getLoginStatus() {
    return this.http.get("http://localhost:3000/whoami").subscribe((response: any) => {
      this.loggedIn = response.status;
    }, (error) => {
      return error;
    });
  }
}
