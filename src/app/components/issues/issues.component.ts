import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { Issue } from '../../models/issue';
import { RootState } from '../../store';
import { IssueActions } from '../../store/issue/issue.actions';
import * as fromIssue from '../../store/issue/issue.selectors';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  issues$: Observable<Issue[]> = EMPTY;

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.issues$ = this.store.select(fromIssue.selectFiltered);
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
