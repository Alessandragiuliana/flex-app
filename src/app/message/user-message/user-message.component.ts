import { Component,Input, OnInit } from '@angular/core';
import { IMessage, Messager } from '../user.model';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss']
})
export class UserMessageComponent implements OnInit {
@Input() messager : Messager = Messager.Build({} as IMessage);

  constructor() { }

  ngOnInit(): void {
  }

}
