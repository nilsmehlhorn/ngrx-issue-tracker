import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issue } from '../../models/issue';
import { IssueActions } from '../../store/issue/issue.actions';
import * as fromIssue from '../../store/issue/issue.selectors';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueListComponent {
  issues$: Observable<Issue[]>;

  constructor(private store: Store) {
    this.issues$ = this.store.select(fromIssue.selectFiltered);
  }

  search(text: string): void {
    this.store.dispatch(IssueActions.search({ text }));
  }

  resolve(issue: Issue): void {
    this.store.dispatch(IssueActions.resolve({ issueId: issue.id }));
  }

  trackByIssues(index: number, issue: Issue): string {
    return issue.id;
  }
}
