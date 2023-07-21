import { createAction, props } from '@ngrx/store';
import { ITodosList } from '../model/todo.model';

export const loadTodosListSuccess = createAction( '[TodosAPI] Load Todos List', props<{ todos: ITodosList }>());
export const loadTodosListFailure = createAction( '[TodosAPI] Load Todos List', props<{ error: ITodosList }>());

// export const addTodoToList = createAction( [TodosAPI] Load Todos', props<{ data: any }>());
// export const loadTodos = createAction( [TodosAPI] Load Todos', props<{ data: any }>());
// export const loadTodos = createAction( [TodosAPI] Load Todos', props<{ data: any }>());
// export const loadTodos = createAction( [TodosAPI] Load Todos', props<{ data: any }>());