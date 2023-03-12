import { createActionGroup, props } from '@ngrx/store';
import { Priority } from '../../models/priority';

export const SettingsActions = createActionGroup({
  source: 'Settings',
  events: {
    'Change Notification Priority': props<{ notificationPriority: Priority }>(),
  },
});
