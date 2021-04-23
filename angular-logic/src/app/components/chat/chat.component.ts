import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message : string = "";
  username : string = "";
  loggedInUserName : string = "";
  messages : any[] = [];
  users : any;
  selectedUser = "";

  constructor(private chat : ChatService) { }

  ngOnInit(): void {
    this.chat.chatMessages.subscribe((messages)=>{
      this.messages = messages;
  })
  }
  sendMessage(){
    this.chat.send(this.message, this.loggedInUserName);
  }

  loginUser(){
      this.loggedInUserName = this.username;
      this.chat.login(this.loggedInUserName);
  }
}
/* 
  message : string = "";
  username : string = "";
  messages : any[] = [];
  selectedUser = "";
  nickname: string;
  users : any;

  constructor(private chat : ChatService) {  }

  ngOnInit(): void {
      this.chat.chatMessages.subscribe((messages)=>{
          this.messages = messages;
      })
      this.chat.totalusers.subscribe((users)=>{
        this.users = users;
    })
  }

  sendMessage(){
    this.chat.send(this.message, this.selectedUser);
  }

  loginUser(){
    this.selectedUser = this.nickname;
    this.chat.login(this.selectedUser);
  } */

