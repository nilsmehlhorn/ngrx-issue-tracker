/* eslint-disable @typescript-eslint/no-explicit-any -- 
we cannot know the type of the underyling reducers, using any here is okay */
import { ActionReducer, createAction } from '@ngrx/store';

export const loggingMetaReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    console.log('current state', state);
    console.log('action', action);
    // execute the actual reducer
    const nextState = reducer(state, action);
    console.log('next state', nextState);
    return nextState;
  };
};

export const reset = createAction('[Meta] Reset');

export const resettingMetaReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === reset.type) {
      return reducer(undefined, action);
    }
    return reducer(state, action);
  };
};
