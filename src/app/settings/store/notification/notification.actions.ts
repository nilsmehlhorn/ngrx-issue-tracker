import { createActionGroup, props } from '@ngrx/store';
import { Priority } from '../../../models/priority';

export const NotificationActions = createActionGroup({
  source: 'Notification',
  events: {
    'Change Priority': props<{ priority: Priority }>(),
  },
});
