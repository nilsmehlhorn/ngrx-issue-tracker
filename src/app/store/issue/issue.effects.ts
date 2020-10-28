import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { IssueService } from '../../services/issue.service';
import * as IssueActions from './issue.actions';

@Injectable()
export class IssueEffects {
  submit$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.submit),
      mergeMap((action) => this.issues.save(action.issue)),
      map((issue) => IssueActions.submitSuccess({ issue }))
    )
  );

  constructor(private action$: Actions, private issues: IssueService) {}
}
