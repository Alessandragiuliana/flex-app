import { BreakpointObserver, } from '@angular/cdk/layout';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnDestroy,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/shared/chat.service';
import { UserService } from 'src/app/shared/user.service';
import {  IMessage, IUser, User } from '../../model/user.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {
  public selectedUser : User = User.Build({}as IUser);
  private querySubscription: Subscription;
  conversation :any;
  small: boolean = false;
  opened: boolean = false;
  searchText :any;
  screenQuery: string = '(max-width: 768px)';
  chat: IMessage[]=[];
  users: IUser[]= [];
  selectUsers : User = User.Build({}as IUser);
 
  

  constructor( private observer: BreakpointObserver,private chatService: ChatService, private userService: UserService) {

    this.querySubscription = this.observer.observe(this.screenQuery).subscribe(
      (result) => {
        this.small = result.matches;
      }
    );
  }
  

   ngOnDestroy(): void {
    if (this.querySubscription != null) this.querySubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.small = this.observer.isMatched(this.screenQuery);
    this.getUsers();
    this.getChat();
  }

  toggleAside(): void {
    this.opened = !this.opened;
  }
 
  onClickSelected(): void{
   this.conversation= !this.conversation;
  }
  
  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => {
          this.users = users;
          console.log(users);
        });
  }
  getChat(): void {
    this.chatService.getChat()
      .subscribe(chat => {
        this.chat = chat;
        console.log(chat);
      });
  }
}


  

