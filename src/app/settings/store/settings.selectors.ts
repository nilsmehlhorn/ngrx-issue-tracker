import { createFeatureSelector, createSelector } from '@ngrx/store';
import { settingsFeatureKey, SettingsState } from './settings.state';

export const selectFeature =
  createFeatureSelector<SettingsState>(settingsFeatureKey);

export const selectNotificationPriority = createSelector(
  selectFeature,
  (settings) => settings.notificationPriority
);
