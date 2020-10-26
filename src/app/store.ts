import {
  ActionReducerMap,
  createAction,
  createReducer,
  on,
  props,
} from '@ngrx/store';

export interface State {
  count: number;
}

export const increment = createAction('[Counter] Increment');
export const multiply = createAction(
  '[Counter] Multiply',
  props<{ factor: number }>()
);

export const countReducer = createReducer(
  0,
  on(increment, (count) => {
    return count + 1;
  }),
  on(multiply, (count, action) => count * action.factor)
);

export const reducers: ActionReducerMap<State> = {
  count: countReducer,
};
