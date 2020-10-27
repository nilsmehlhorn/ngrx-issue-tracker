import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Priority } from '../models/priority';
import * as SettingsActions from './store/settings.actions';
import * as fromSettings from './store/settings.selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  notificationPriority$: Observable<Priority>;

  constructor(private store: Store) {
    this.notificationPriority$ = this.store.select(
      fromSettings.selectNotificationPriority
    );
  }

  changeNotificationPriority(notificationPriority: Priority): void {
    this.store.dispatch(
      SettingsActions.changeNotificationPriority({ notificationPriority })
    );
  }
}
