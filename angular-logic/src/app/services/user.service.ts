import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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

  getLoginStatus() {
    console.log("get login was called");

    return this.http.get("http://localhost:3000/whoami");
    // .subscribe((response: any) => {
    //   console.log("THIS IS THE TOKEN: ");
    //   console.log(response.accessToken);
    //   if (window.localStorage.getItem("access-token") === response.accessToken) {
    //     console.log("Getting true from who am i")
    //     return true;
    //   }
    // }, (error) => {
    //   console.log("In the error section")
    //   console.log(error)
    //   return false;
    // });

  }

  // getLoginStatus(): Observable<boolean> {
  //   return this.http.get<boolean>("http://localhost:3000/whoami").pipe(
  //     (switchMap(response: any) => 
  //       // do something with icons response
  //       // based on some condition return true or false
  //       return of(true)
  //     )
  //   )
  // }
}
