import {
  routerCancelAction,
  routerErrorAction,
  routerNavigatedAction,
  routerRequestAction,
} from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { initialState, NavigationState } from './navigation.state';

export const navigationReducer = createReducer(
  initialState,
  on(
    routerRequestAction,
    (state): NavigationState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    routerNavigatedAction,
    routerErrorAction,
    routerCancelAction,
    (state): NavigationState => ({
      ...state,
      loading: false,
    })
  )
);
