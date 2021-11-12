import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component,Input, OnInit, } from '@angular/core';
import { ChatService } from 'src/app/shared/chat.service';
import {  IMessage, IUser, User, } from '../../model/user.model';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss'],
  providers: [ChatService]
})
export class UserMessageComponent implements OnInit {
  @Input() user: User = User.Build({}as IUser);
  chat: IMessage[]=[];
  constructor(private chatService: ChatService) { 
  
  }  

  ngOnInit(): void {
    this.getChat();

  }

  getChat(): void {
    this.chatService.getChat()
      .subscribe(chat => {
        this.chat = chat;
        console.log(chat);
      });
  }
 
}
