import {createAction, props} from '@ngrx/store';
import {ITodosList, ITodo} from '../model/todo.model';

export const updateTodo = createAction('Todos/updateTodo', props<{ data: any }>());
export const deleteTodo = createAction('Todos/deleteTodo', props<{ data: any }>());
export const completeTodo = createAction('Todos/completeTodo', props<{ data: any }>());
export const uncompleteTodo = createAction('Todos/uncompleteTodo', props<{ data: any }>());
export const addTodo = createAction('Todos/addTodo', props<{ data: any }>());
export const loadTodos = createAction('Todos/loadTodos', props<{ data: any }>());