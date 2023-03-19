import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import * as fromIssue from './store/issue/issue.selectors';
import { reset } from './store/meta-reducers';
import * as fromNavigation from './store/navigation/navigation.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stats$: Observable<fromIssue.IssueStats>;
  navigationLoading$: Observable<boolean>;

  constructor(private store: Store) {
    this.stats$ = this.store.select(fromIssue.selectStats);
    this.navigationLoading$ = this.store
      .select(fromNavigation.selectLoading)
      .pipe(
        // delay spinner deactivation, so we can see the spinner for a bit
        delayWhen((loading) => interval(loading ? 0 : 500))
      );
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
