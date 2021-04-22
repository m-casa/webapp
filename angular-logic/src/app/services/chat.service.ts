import { Injectable } from '@angular/core';
import { io, Socket } from "socket.io-client"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket: Socket
  chatMessages: BehaviorSubject<any> = new BehaviorSubject([])



  constructor() {
    // Connect to Socket IO Server
    this.socket = io("http://localhost:3000");
  }

  login(nickname: string) {
    this.socket.emit("login", nickname);
  }

  
  send(message: string, user : string) {
    this.socket.emit("chat", { message, user});
    this.chatMessages.next([...this.chatMessages.value, { message : message, self : true, user: user }])
  }

  receive() {
    this.socket.on("message", ({message, user}) => {
      this.chatMessages.next([...this.chatMessages.value, { message : message, self : false, user: user }])
    })
  }
}