import { Component, Input, OnInit } from '@angular/core';
import { IUser, User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() user: User = User.Build({}as IUser);
  constructor() { }

  ngOnInit(): void {
  }

}
