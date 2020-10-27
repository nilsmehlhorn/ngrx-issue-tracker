import { createAction, props } from '@ngrx/store';
import { Priority } from '../../models/priority';

export const changeNotificationPriority = createAction(
  '[Settings] Change Notification Priority',
  props<{ notificationPriority: Priority }>()
);
