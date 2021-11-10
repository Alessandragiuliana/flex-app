import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/shared/chat.service';
import { UserService } from 'src/app/shared/user.service';
import { IMessage, IUser, User } from '../../model/user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private userss : User = User.Build({}as IUser);
  @Input() 
  public set user(v : IUser) {
    this.userss = User.Build(v)
    console.log(v);
  }
  
  public get user() : User {
    return this.userss;
  }
  
  // user: User = User.Build({}as IUser);
  @Output() selectedUser = new EventEmitter<User>();
  message : IMessage[]= [];
  users: IUser[]= [];


  constructor(private userService: UserService) {
    }

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }
  }


