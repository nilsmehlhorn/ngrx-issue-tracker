import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issue } from '../../models/issue';
import * as fromIssue from '../../store/issue/issue.selectors';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueDetailComponent {
  issue$: Observable<Issue | undefined>;

  constructor(private store: Store) {
    this.issue$ = this.store.select(fromIssue.selectActive);
  }
}
