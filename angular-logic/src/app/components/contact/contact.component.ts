import { ConnectionService } from '../../services/connection.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private connectionService: ConnectionService) { }

  
  contactForm:any = {
    "name": String,
    "email": String,
    "query" : String,
  };

  ngOnInit(): void{
  }

  onSubmit() {
    console.log("Your query has been sent.")
    this.connectionService.onSubmit(this.contactForm);
  }
}
