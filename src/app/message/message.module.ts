import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import {LayoutModule} from '@angular/cdk/layout';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { UserListComponent } from './user-list/user-list.component';
import {MatInputModule} from '@angular/material/input';
import { UserMessageComponent } from './user-message/user-message.component';

@NgModule({
    declarations: [
      MainComponent,
      UserListComponent,
      UserMessageComponent
    ],
    imports: [
      CommonModule,
      LayoutModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule
    ],
    exports: [
      UserListComponent
    ]


  })
  export class MessageModule { }