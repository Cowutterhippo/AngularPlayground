import {  createAction, props } from '@ngrx/store';
import { ITodosList, ITodo } from '../model/todo.model';

export const createTodoList = createAction('TodosList/createTodoList', props<{ data: any }>());
export const updateTodoList = createAction('TodosList/updateTodoList', props<{ data: any }>());
export const deleteTodoList = createAction('TodosList/deleteTodoList', props<{ data: any }>());
export const loadTodosList = createAction('TodosList/loadTodosList', props<{ data: any }>());
export const loadTodosListSuccess = createAction('TodosList/loadTodosListSuccess', props<{ data: any }>());
export const loadTodosListFailure = createAction('TodosList/loadTodosListFailure', props<{ data: any }>());
export const addTodoToList = createAction('TodosList/addTodoToList', props<{ data: any }>());
export const loadTodos = createAction('TodosList/loadTodos', props<{ data: any }>());
export const loadTodosSuccess = createAction('TodosList/loadTodosSuccess', props<{ data: any }>());
export const loadTodosFailure = createAction('TodosList/loadTodosFailure', props<{ data: any }>());
export const updateTodo = createAction('TodosList/updateTodo', props<{ data: any }>());
export const deleteTodo = createAction('TodosList/deleteTodo', props<{ data: any }>());
export const completeTodo = createAction('TodosList/completeTodo', props<{ data: any }>());
export const uncompleteTodo = createAction('TodosList/uncompleteTodo', props<{ data: any }>());
export const addTodo = createAction('TodosList/addTodo', props<{ data: any }>());