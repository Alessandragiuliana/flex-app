import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import {LayoutModule} from '@angular/cdk/layout';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { UserListComponent } from './user-list/user-list.component';
import {MatInputModule} from '@angular/material/input';
import { UserMessageComponent } from './user-message/user-message.component';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';



@NgModule({
    declarations: [
      MainComponent,
      UserListComponent,
      UserMessageComponent,
      
    ],
    imports: [
      CommonModule,
      LayoutModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatDividerModule,
      FormsModule,
      BrowserModule,
      Ng2SearchPipeModule ,
      HttpClientModule ,
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      )
 ],
    exports: [
      UserListComponent
    ]


  })
  export class MessageModule { }