import { createAction, props } from '@ngrx/store';
import { Priority } from '../../../models/priority';

export const changePriority = createAction(
  '[Notification] Change Priority',
  props<{ priority: Priority }>()
);
