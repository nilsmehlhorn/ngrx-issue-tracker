import { Priority } from '../../models/priority';
import { RootState } from '../../store';

export interface SettingsState {
  notificationPriority: Priority;
}

export const initialState: SettingsState = {
  notificationPriority: 'low',
};

export const settingsFeatureKey = 'settings';

export interface SettingsRootState extends RootState {
  [settingsFeatureKey]: SettingsState;
}
