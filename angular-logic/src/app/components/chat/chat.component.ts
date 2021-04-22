import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message : string = "";
  username : string = "";
  messages : any[] = [];
  selectedUser = "";
  nickname: string;

  constructor(private chat : ChatService) {  }

  ngOnInit(): void {
      this.chat.chatMessages.subscribe((messages)=>{
          this.messages = messages;
      })
  }

  sendMessage(){
    this.chat.send(this.message, this.selectedUser);
  }

  loginUser(){
    this.selectedUser = this.nickname;
    this.chat.login(this.selectedUser);
  }
}
