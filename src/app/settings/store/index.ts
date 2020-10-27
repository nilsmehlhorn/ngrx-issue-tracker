import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { RootState } from '../../store';
import { notificationReducer } from './notification/notification.reducer';
import { NotificationState } from './notification/notification.state';
import { profileReducer } from './profile/profile.reducer';
import { ProfileState } from './profile/profile.state';

export interface SettingsState {
  notification: NotificationState;
  profile: ProfileState;
}

export const settingsReducers: ActionReducerMap<SettingsState> = {
  notification: notificationReducer,
  profile: profileReducer,
};

export const settingsFeatureKey = 'settings';

export interface SettingsRootState extends RootState {
  [settingsFeatureKey]: SettingsState;
}

export const selectFeature = createFeatureSelector<
  SettingsRootState,
  SettingsState
>(settingsFeatureKey);
