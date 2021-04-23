import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // addIcons(): Observable<boolean> {
  //   return this.userService.getLoginStatus().pipe(
  //     switchMap((response: any) => {
  //       // do something with icons response
  //       // based on some condition return true or false
  //       if (window.localStorage.getItem("access-token") === response.accessToken) {
  //         console.log("Getting true from who am i")
  //         return true;
  //       }
  //       return of(true)
  //     })
  //   )
  // }

  getUserPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.getLoginStatus();
    })
  }

  constructor(public userService: UserService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // this.addIcons().subscribe(data => {
    //   if (data === true)
    //       //do something use the data
    
    //   });

    let loginStatus: boolean = false;

    const observableForToken = this.userService.getLoginStatus();
    observableForToken.subscribe((response: any) => {
      console.log("THIS IS THE TOKEN: ");
      console.log(response.accessToken);
      if (window.localStorage.getItem("access-token") === response.accessToken) {
        console.log("Getting true from who am i")
        loginStatus = true;
      }
    }, (error) => {
      console.log("In the error section")
      console.log(error)
      loginStatus = false;
    });



    console.log("Value of login status is")
    console.log(loginStatus)
    return loginStatus;
  }

}
