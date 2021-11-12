import { Injectable } from '@angular/core';
import { IMessage } from '../model/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chat: IMessage[] = [
    {
      id: 1,
      body: "I'm fine thank's u?",
      times: "12.04 PM",
      me: true,
    },
    {
      id: 2,
      body: "I'm fine thank's u?",
      times: "12:40 PM",
      me: false,
    },
    {
      id: 3,
      body: "so and so, what are you going to do in the afternoon?",
      times: "12:43 PM",
      me: true,
    },
    {
      id: 4,
      body: "I'm going to go see an exhibit in a museum",
      times: "12:43 PM",
      me: false,
    },
    {
      id: 1,
      body: "I'm fine thank's u?",
      times: "12.04 PM",
      me: true,
    },
    {
      id: 2,
      body: "I'm fine thank's u?",
      times: "12:40 PM",
      me: false,
    },
    {
      id: 3,
      body: "so and so, what are you going to do in the afternoon?",
      times: "12:43 PM",
      me: true,
    },
    {
      id: 4,
      body: "I'm going to go see an exhibit in a museum",
      times: "12:43 PM",
      me: false,
    },
  ];
  constructor() { }

  getChat(): Observable<IMessage[]> {
    return of(this.chat);
  }

  add(chat: IMessage): void {
    this.chat.push({
      ...chat,
      id: this.chat.length,
    });
  }
  
  clear() {
    this.chat = [];
  }

}

