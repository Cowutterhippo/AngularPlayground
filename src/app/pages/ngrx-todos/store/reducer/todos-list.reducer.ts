import { Action, createReducer, on } from '@ngrx/store';
import * as todosActions from '../action/index';

export interface State {
    // define state 
};

export const initialState = {
    //set initial state
};

const featureReducer = createReducer(
    initialState,
    on(todosActions, state => ({ ...state, prop: newValue })),
);
export function reducer(state: State, action: Action) {
    return featureReducer(state, action);
}