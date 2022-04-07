import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {catchError, map } from "rxjs/operators";
import {TodoStatus} from "../../model/todo-status";
import {throwError} from "rxjs";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  todo = this.todoService.getDetailsTodo().pipe(map(todoList => todoList.filter(todo => todo.status === TodoStatus.PENDING)[1]),
    catchError(error => throwError('Error', error)));

  constructor(private todoService: TodoService) {
  }


}
