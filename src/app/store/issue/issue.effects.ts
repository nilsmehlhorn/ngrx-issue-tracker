import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, mergeMap } from 'rxjs/operators';
import { IssueService } from '../../services/issue.service';
import { withLatestFromDeferred } from '../../util';
import * as IssueActions from './issue.actions';
import * as fromIssue from './issue.selectors';

@Injectable()
export class IssueEffects {
  submit$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.submit),
      withLatestFromDeferred(this.store.select(fromIssue.selectAll)),
      filter(([action, issues]) =>
        issues.every(({ title }) => title !== action.issue.title)
      ),
      mergeMap(([action, issues]) => this.issues.save(action.issue)),
      map((issue) => IssueActions.submitSuccess({ issue }))
    )
  );

  constructor(
    private action$: Actions,
    private issues: IssueService,
    private store: Store
  ) {}
}
