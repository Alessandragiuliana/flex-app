import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import {LayoutModule} from '@angular/cdk/layout';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
    declarations: [
      MainComponent,
      UserListComponent
    ],
    imports: [
      CommonModule,
      LayoutModule,
      MatButtonModule,
      MatIconModule,
        
    ],
    exports: [
      UserListComponent
    ]


  })
  export class MessageModule { }