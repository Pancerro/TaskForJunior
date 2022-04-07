import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  resource = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getDetailsTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.resource);
  }
}
