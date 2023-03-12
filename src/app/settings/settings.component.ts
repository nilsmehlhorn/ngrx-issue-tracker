import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Priority } from '../models/priority';
import { NotificationActions } from './store/notification/notification.actions';
import * as fromNotification from './store/notification/notification.selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  notificationPriority$: Observable<Priority>;

  constructor(private store: Store) {
    this.notificationPriority$ = this.store.select(
      fromNotification.selectPriority
    );
  }

  changeNotificationPriority(selectedPriority: string): void {
    const priority = selectedPriority as Priority;
    this.store.dispatch(NotificationActions.changePriority({ priority }));
  }
}
