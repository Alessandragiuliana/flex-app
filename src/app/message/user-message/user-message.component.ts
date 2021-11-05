import { Component,Input, OnInit, } from '@angular/core';
import { IUser, User, } from '../user.model';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss']
})
export class UserMessageComponent implements OnInit {
  @Input() user: User = User.Build({}as IUser);
  
  constructor() { }

  ngOnInit(): void {
  }


}
