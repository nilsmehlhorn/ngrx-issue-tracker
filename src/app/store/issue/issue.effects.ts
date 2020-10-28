import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { IssueService } from '../../services/issue.service';
import * as IssueActions from './issue.actions';

@Injectable()
export class IssueEffects implements OnInitEffects {
  submit$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.submit),
      mergeMap((action) =>
        this.issues.save(action.issue).pipe(
          map((issue) => IssueActions.submitSuccess({ issue })),
          catchError(() => of(IssueActions.submitFailure()))
        )
      )
    )
  );

  resolve$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.resolve),
      mergeMap(({ issueId }) =>
        this.issues.resolve(issueId).pipe(
          map(() => IssueActions.resolveSuccess()),
          catchError(() => of(IssueActions.resolveFailure({ issueId })))
        )
      )
    )
  );

  load$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.load),
      switchMap(() => this.issues.getAll()),
      map((issues) => IssueActions.loadSuccess({ issues }))
    )
  );

  constructor(
    private action$: Actions,
    private issues: IssueService,
    private store: Store
  ) {}

  ngrxOnInitEffects(): Action {
    return IssueActions.load();
  }
}
