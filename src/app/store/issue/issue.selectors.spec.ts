import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import { mockState } from '../index.spec';
import { IssueFactory } from './issue.factory.spec';
import {
  selectAllLoaded,
  selectFeature,
  selectFiltered,
  selectOne
} from './issue.selectors';

describe('Issue Selectors', () => {
  let factory: IssueFactory;

  beforeEach(() => {
    factory = new IssueFactory();
  });

  describe('selectFeature', () => {
    it('should select feature state', () => {
      const issueState = factory.state({
        entities: factory.entities(factory.entity(), factory.entity()),
      });
      const rootState = mockState({
        issue: issueState,
      });
      expect(selectFeature(rootState)).toEqual(issueState);
    });
  });

  describe('selectFiltered', () => {
    it('should select all for empty filter', () => {
      const issues = [factory.entity(), factory.entity()];
      const filtered = selectFiltered.projector(issues, { text: '' });
      expect(filtered).toEqual(issues);
    });

    it('should filter issues for non-empty filter', () => {
      const first = factory.entity({
        title: 'First',
        description: 'This is a Test',
      });
      const second = factory.entity({
        title: 'Second',
        description: 'This is a Test',
      });
      let filtered = selectFiltered.projector([first, second], {
        text: 'First',
      });
      expect(filtered).toEqual([first]);
      filtered = selectFiltered.projector([first, second], {
        text: 'test',
      });
      expect(filtered).toEqual([first, second]);
    });
  });

  describe('selectOne', () => {
    it('should select issue by id', () => {
      const first = factory.entity();
      const second = factory.entity();
      const entities = factory.entities(first, second);
      const selected = selectOne.projector(entities, first.id);
      expect(selected).toEqual(first);
    });
  });

  describe('selectAllLoaded (async)', () => {
    it('should emit issues once loaded', (done) => {
      const unloadedState = mockState({
        issue: factory.state({ loaded: false }),
      });
      const issue = factory.entity();
      const loadedState = mockState({
        issue: factory.state({
          loaded: true,
          entities: factory.entities(issue),
        }),
      });
      of(unloadedState, loadedState)
        .pipe(selectAllLoaded(), toArray())
        .subscribe((states) => {
          expect(states.length).toBe(1);
          expect(states[0]).toEqual([issue]);
          done();
        });
    });
  });

  describe('selectAllLoaded (marble)', () => {
    const scheduler = new TestScheduler((actual, expected) => {
      // Jasmine-specific equality check
      expect(actual).toEqual(expected);
    });

    it('should emit issues once loaded', () => {
      scheduler.run(({ hot, expectObservable }) => {
        const unloadedState = {
          issue: factory.state({ loaded: false }),
        };
        const issue = factory.entity();
        const loadedState = {
          issue: factory.state({
            loaded: true,
            entities: factory.entities(issue),
          }),
        };
        const selection = hot('--a--b--|', {
          a: unloadedState,
          b: loadedState,
        }).pipe(selectAllLoaded());
        expectObservable(selection).toBe('-----b--|', { b: [issue] });
      });
    });
  });
});
