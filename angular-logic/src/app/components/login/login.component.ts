import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FlashMessageService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private AuthService : AuthService , private router : Router , private flashMessage FlashMessageService) { }

  ngOnInit(): void {

  }

  onLoginSubmit(){

    //console.log(this.usernae) ;
    const user = {
        username : this.username ,
        password : this.password
    }

    this.AuthService.authenticateUser(user).subscribe(data => {

          // console.log(data);
        if (data.success){
            this.AuthService.storeUserData(data.token, data.user);

            this.flashMessage.show('You are now logged in' , {cssClass:'alert-success',timeout:5000});
            this.router.navigate(['dashboard']);

        }else{

            this.flashMessage.show(data.msg , {cssClass:'alert-danger',timeout:5000});
            this.router.navigate(['login']);
        }
    });
  }

}
