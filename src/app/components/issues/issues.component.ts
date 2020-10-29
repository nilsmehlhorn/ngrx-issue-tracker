import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issue } from '../../models/issue';
import { RootState } from '../../store';
import * as IssueActions from '../../store/issue/issue.actions';
import * as fromIssue from '../../store/issue/issue.selectors';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  issues$: Observable<Issue[]>;

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.issues$ = this.store.pipe(fromIssue.selectAllLoaded());
  }

  onSearch(text: string): void {
    this.store.dispatch(IssueActions.search({ text }));
  }

  onResolve(issue: Issue): void {
    this.store.dispatch(IssueActions.resolve({ issueId: issue.id }));
  }

  onSubmit(issue: Issue): void {
    this.store.dispatch(IssueActions.submit({ issue }));
  }
}
