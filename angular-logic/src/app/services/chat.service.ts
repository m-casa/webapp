import { Injectable } from '@angular/core';
import { io, Socket } from "socket.io-client"
import { BehaviorSubject } from "rxjs"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket: Socket
  chatMessages: BehaviorSubject<any> = new BehaviorSubject([])


  constructor(private router : Router) {
    // Connect to Socket IO Server
    this.socket = io("http://localhost:3000");
  }

  login(nickname: string) {
    this.socket.emit("login", nickname);
  }

  
  send(message: string, user : string) {
    this.socket.emit("chat", { message, user});
    this.chatMessages.next([...this.chatMessages.value, { message : message, self : true }])
  }

  receive() {
    this.socket.on("message", (message) => {
      this.chatMessages.next([...this.chatMessages.value, { message : message, self : false, }])
    })
  }
}