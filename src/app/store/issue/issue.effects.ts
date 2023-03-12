import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RootState } from '..';
import { IssueService } from '../../services/issue.service';
import { IssueActions } from './issue.actions';

@Injectable()
export class IssueEffects {
  submit$ = createEffect(() => {
    return this.action$.pipe(
      ofType(IssueActions.submit),
      mergeMap((action) =>
        this.issues.save(action.issue).pipe(
          map((issue) => IssueActions.submitSuccess({ issue })),
          catchError(() => of(IssueActions.submitError()))
        )
      )
    );
  });

  resolve$ = createEffect(() => {
    return this.action$.pipe(
      ofType(IssueActions.resolve),
      mergeMap(({ issueId }) =>
        this.issues.resolve(issueId).pipe(
          map(() => IssueActions.resolveSuccess()),
          catchError(() => of(IssueActions.resolveError({ issueId })))
        )
      )
    );
  });

  constructor(
    private action$: Actions,
    private issues: IssueService,
    private store: Store<RootState>
  ) {}
}
