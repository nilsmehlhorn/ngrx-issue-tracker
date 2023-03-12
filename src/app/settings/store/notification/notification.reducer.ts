import { createReducer, on } from '@ngrx/store';
import { NotificationActions } from './notification.actions';
import { initialState, NotificationState } from './notification.state';

export const notificationReducer = createReducer(
  initialState,
  on(
    NotificationActions.changePriority,
    (state, { priority }): NotificationState => ({
      ...state,
      priority,
    })
  )
);
