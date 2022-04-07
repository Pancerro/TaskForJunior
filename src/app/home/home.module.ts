import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TodoComponent } from './component/todo/todo.component';
import {HomeRoutingModule} from "./home-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { TodoPipe } from './pipe/todo.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    TodoComponent,
    TodoPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
