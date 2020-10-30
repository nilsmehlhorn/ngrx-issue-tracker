import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { tap } from 'rxjs/operators';
import { AnalyticService } from '../../services/analytic.service';

@Injectable()
export class RouterEffects {
  pageView$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(routerNavigatedAction),
        tap((action) =>
          this.analytics.trackPageView(action.payload.routerState.url)
        )
      ),
    { dispatch: false }
  );

  constructor(private action$: Actions, private analytics: AnalyticService) {}
}
