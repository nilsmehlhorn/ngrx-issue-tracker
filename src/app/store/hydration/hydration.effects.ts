import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { HydrationActions } from './hydration.actions';

@Injectable()
export class HydrationEffects implements OnInitEffects {
  hydrate$ = createEffect(() => {
    return this.action$.pipe(
      ofType(HydrationActions.start),
      map(() => {
        const storageValue = localStorage.getItem('state');
        if (storageValue) {
          try {
            const state = JSON.parse(storageValue);
            return HydrationActions.found({ state });
          } catch {
            localStorage.removeItem('state');
          }
        }
        return HydrationActions.notfound();
      })
    );
  });

  serialize$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(HydrationActions.found, HydrationActions.notfound),
        switchMap(() => this.store),
        distinctUntilChanged(),
        tap((state) => localStorage.setItem('state', JSON.stringify(state)))
      );
    },
    { dispatch: false }
  );

  constructor(private action$: Actions, private store: Store) {}

  ngrxOnInitEffects(): Action {
    return HydrationActions.start();
  }
}
