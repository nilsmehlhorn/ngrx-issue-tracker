import { Priority } from '../../../models/priority';

export interface NotificationState {
  priority: Priority;
}

export const initialState: NotificationState = {
  priority: 'low',
};
