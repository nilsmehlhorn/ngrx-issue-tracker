import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromIssue from './store/issue/issue.selectors';
import { reset } from './store/meta-reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stats$: Observable<fromIssue.IssueStats>;

  constructor(private store: Store) {
    this.stats$ = this.store.select(fromIssue.selectStats);
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
