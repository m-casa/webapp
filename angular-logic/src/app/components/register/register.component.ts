import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    name: "",
    email: "",
    username: "",
    password: ""
  }

  confirm = {
    password: ""
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register() {
    this.userService.register(this.user);
  }
}
