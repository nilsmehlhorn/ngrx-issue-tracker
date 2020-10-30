import {
  routerCancelAction,
  routerErrorAction,
  routerNavigatedAction,
  routerRequestAction,
} from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './navigation.state';

export const navigationReducer = createReducer(
  initialState,
  on(routerRequestAction, (state) => ({
    ...state,
    loading: true,
  })),
  on(routerNavigatedAction, routerErrorAction, routerCancelAction, (state) => ({
    ...state,
    loading: false,
  }))
);
