import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "../model/todo-model";

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {

  transform(todo: Todo | null): string | null {
    if (todo?.due_on) {
      const date = new Date(todo.due_on);
      todo.due_on = `${date.getDay().toString().padStart(2, "0")}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
      return `
        <div class="title">
            Title: ${todo.title}
        </div>
        <div class="due-on">
            Due on: ${todo.due_on}
        <div>
        <div class="status">
        Status: ${todo.status}
        </div>`;

    }
    return null;
  }

}
