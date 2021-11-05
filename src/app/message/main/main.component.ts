import { BreakpointObserver, } from '@angular/cdk/layout';
import { Component, OnDestroy,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {  USERS } from '../mock-data';
import {  IUser, User } from '../user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {
  public users: User[] = USERS.map(user => User.Build(user));
  public selectedUser : User = User.Build({}as IUser);
  private querySubscription: Subscription;
  conversation :any;
  small: boolean = false;
  opened: boolean = false;
  searchText :any;
  screenQuery: string = '(max-width: 768px)';
  
  

  constructor( private observer: BreakpointObserver) {
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
  }

  toggleAside(): void {
    this.opened = !this.opened;
  }
 
  onClickSelected(): void{
   this.conversation= !this.conversation;
  }
  
 

  
}
