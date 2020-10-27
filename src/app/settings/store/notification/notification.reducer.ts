import { createReducer, on } from '@ngrx/store';
import * as NotificationActions from './notification.actions';
import { initialState } from './notification.state';

export const notificationReducer = createReducer(
  initialState,
  on(NotificationActions.changePriority, (state, { priority }) => ({
    ...state,
    priority,
  }))
);
