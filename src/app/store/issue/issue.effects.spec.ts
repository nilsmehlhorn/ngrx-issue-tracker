import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { IssueService } from '../../services/issue.service';
import { IssueActions } from './issue.actions';
import { IssueEffects } from './issue.effects';
import { IssueFactory } from './issue.factory.spec';

describe('IssueEffects', () => {
  let action$: Observable<Action>;
  let effects: IssueEffects;
  let serviceSpy: jasmine.SpyObj<IssueService>;
  let factory: IssueFactory;

  beforeEach(() => {
    factory = new IssueFactory();
    serviceSpy = jasmine.createSpyObj('IssueService', ['save']);
    TestBed.configureTestingModule({
      providers: [
        IssueEffects,
        { provide: IssueService, useValue: serviceSpy },
        provideMockActions(() => action$),
      ],
    });
    effects = TestBed.inject(IssueEffects);
  });

  describe('submit$', () => {
    it('should save issue and dispatch success', (done) => {
      const first = factory.entity();
      const second = factory.entity();
      action$ = of(
        IssueActions.submit({ issue: first }),
        IssueActions.submit({ issue: second })
      );
      serviceSpy.save.and.returnValues(of(first), of(second));
      effects.submit$.pipe(toArray()).subscribe((actions) => {
        expect(actions).toEqual([
          IssueActions.submitSuccess({ issue: first }),
          IssueActions.submitSuccess({ issue: second }),
        ]);
        done();
      });
    });

    it('should dispatch and recover on error', (done) => {
      const first = factory.entity();
      const second = factory.entity();
      action$ = of(
        IssueActions.submit({ issue: first }),
        IssueActions.submit({ issue: second })
      );
      serviceSpy.save.and.returnValues(
        throwError(() => new Error('Validation Error')),
        of(second)
      );
      effects.submit$.pipe(toArray()).subscribe((actions) => {
        expect(actions).toEqual([
          IssueActions.submitError(),
          IssueActions.submitSuccess({ issue: second }),
        ]);
        done();
      });
    });
  });
});
