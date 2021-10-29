import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import {LayoutModule} from '@angular/cdk/layout';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
      MainComponent
    ],
    imports: [
      CommonModule,
      LayoutModule,
      MatButtonModule,
      MatIconModule,
    ]
  })
  export class MessageModule { }