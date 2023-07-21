import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, retry } from "rxjs/operators";

import { ITodo, TodoModel, ITodosList, TodosListModel } from "../store/model/todo.model";


@Injectable({ providedIn: 'root' })
export class NgrxTodosDataService {
    constructor(private http: HttpClient) {

    }

    getTodos(): Observable<TodosListModel[]> |any  {}

    getTodoById(id: string): Observable<TodoModel> |any{}

    getTodosListById(id: string): Observable<TodosListModel> |any{}

    createTodoList(todoList: TodosListModel): Observable<TodosListModel>|any {}

    updateTodoList(todoList: TodosListModel): Observable<TodosListModel> |any{}

    deleteTodoList(id: string): Observable<any> |any{}

    createTodoItem(todoItem: TodoModel): Observable<TodoModel> |any {}

    updateTodoItem(todoItem: TodoModel): Observable<TodoModel>|any {}

    deleteTodoItem(id: string): Observable<any>|any {}

    completeTodoItem(id: string): Observable<any> |any{}

    uncompleteTodoItem(id: string): Observable<any>|any {}

    

}