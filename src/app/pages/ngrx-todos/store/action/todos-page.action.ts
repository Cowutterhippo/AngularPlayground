import { createAction, props } from '@ngrx/store';

export const enterPage = createAction('[TodosPage] Enter Page');
export const leavePage = createAction('[TodosPage] Leave Page');
export const timeoutPage = createAction('[TodosPage] Timeout Page');
export const saveInterval = createAction('[TodosPage] Save Interval', props<{ data: any }>());