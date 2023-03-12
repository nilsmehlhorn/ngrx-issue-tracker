import { createReducer, on } from '@ngrx/store';
import { SettingsActions } from './settings.actions';
import { initialState, SettingsState } from './settings.state';

export const settingsReducer = createReducer(
  initialState,
  on(
    SettingsActions.changeNotificationPriority,
    (state, { notificationPriority }): SettingsState => ({
      ...state,
      notificationPriority,
    })
  )
);
