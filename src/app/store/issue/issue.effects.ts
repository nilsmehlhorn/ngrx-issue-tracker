import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, mergeMap } from 'rxjs/operators';
import { RootState } from '..';
import { IssueService } from '../../services/issue.service';
import { IssueActions } from './issue.actions';
import * as fromIssue from './issue.selectors';

@Injectable()
export class IssueEffects {
  submit$ = createEffect(() => {
    return this.action$.pipe(
      ofType(IssueActions.submit),
      concatLatestFrom(() => this.store.select(fromIssue.selectAll)),
      filter(([action, issues]) =>
        issues.every(({ title }) => title !== action.issue.title)
      ),
      mergeMap(([action, issues]) => this.issues.save(action.issue)),
      map((issue) => IssueActions.submitSuccess({ issue }))
    );
  });

  constructor(
    private action$: Actions,
    private issues: IssueService,
    private store: Store<RootState>
  ) {}
}
