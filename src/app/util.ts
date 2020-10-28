import { Observable, of, pipe } from 'rxjs';
import { concatMap, withLatestFrom } from 'rxjs/operators';

export const randomId = () => Math.random().toString(36).substr(2, 9);

export const withLatestFromDeferred = <A, B>(other: Observable<B>) =>
  pipe(concatMap((value: A) => of(value).pipe(withLatestFrom(other))));
