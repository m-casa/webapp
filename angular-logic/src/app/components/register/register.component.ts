import { Component, OnInit } from '@angular/core';

import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: String ;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService, private flashMessage: flashMessageService) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
      //console.log(this.name);
      const user = {
          name: this.name,
          email:this.email, 
          username: this.username,
          password: this.password
      }

      // Required Fields
      if (!this.validateService.validateRegister(user)){
          //console.log('Please fill in all fields');
          this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
          return false;
      }

      // Validate Email
      if (!this.validateService.validateEmail(user.email)){
            console.log('Please use a valid email');
            this.flashMessage.show('Please use a valid email',{cssClass: 'alert-danger', timeout:3000});
            return false;
      }
  }
}
