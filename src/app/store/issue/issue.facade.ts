import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Issue } from '../../models/issue';
import { IssueActions } from './issue.actions';
import * as fromIssue from './issue.selectors';

@Injectable({ providedIn: 'root' })
export class IssueFacade {
  issues$ = this.store.select(fromIssue.selectFiltered);

  constructor(private store: Store) {}

  submit(issue: Issue): void {
    this.store.dispatch(IssueActions.submit({ issue }));
  }

  resolve(issueId: string): void {
    this.store.dispatch(IssueActions.resolve({ issueId }));
  }

  search(text: string): void {
    this.store.dispatch(IssueActions.search({ text }));
  }
}
