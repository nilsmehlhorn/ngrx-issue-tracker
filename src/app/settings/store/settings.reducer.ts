import { createReducer, on } from '@ngrx/store';
import { initialState } from './settings.state';
import * as SettingsActions from './settings.actions';

export const settingsReducer = createReducer(
  initialState,
  on(
    SettingsActions.changeNotificationPriority,
    (state, { notificationPriority }) => ({
      ...state,
      notificationPriority,
    })
  )
);
