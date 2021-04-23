import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
        window.localStorage.setItem("access-token", response.accessToken);
        this.router.navigateByUrl("/");
      });
  }

  getLoginStatus(): Observable<boolean> {
    return this.http.get("http://localhost:3000/whoami").pipe(map((response: any) => {
      if (response.accessToken === window.localStorage.getItem("access-token")) {
        return true
      }
      else {
        return false
      }
    }));
  }
}
