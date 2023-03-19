import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { reducers, RootState } from '../../store';
import { mockState } from '../../store/index.spec';
import { IssueActions } from '../../store/issue/issue.actions';
import { IssueFactory } from '../../store/issue/issue.factory.spec';
import * as fromIssue from '../../store/issue/issue.selectors';
import { IssueListComponent } from './issue-list.component';

describe('IssueListComponent', () => {
  describe('Unit Tests', () => {
    let component: IssueListComponent;
    let fixture: ComponentFixture<IssueListComponent>;
    let store: MockStore<RootState>;
    let factory: IssueFactory;

    beforeEach(async () => {
      factory = new IssueFactory();

      await TestBed.configureTestingModule({
        declarations: [IssueListComponent],
        providers: [provideMockStore({ initialState: mockState() })],
        imports: [RouterTestingModule],
      }).compileComponents();

      store = TestBed.inject(MockStore);
      fixture = TestBed.createComponent(IssueListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    afterEach(() => {
      store.resetSelectors();
    })

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display issues', () => {
      let elements = fixture.debugElement.queryAll(By.css('li'));
      expect(elements.length).toBe(0);
      const issues = [factory.entity(), factory.entity()];
      store.setState(
        mockState({
          issue: factory.state({
            loaded: true,
            entities: factory.entities(...issues),
          }),
        })
      );
      fixture.detectChanges();
      elements = fixture.debugElement.queryAll(By.css('li'));
      expect(elements.length).toBe(issues.length);
    });

    it('should display issues (selector override)', () => {
      let elements = fixture.debugElement.queryAll(By.css('li'));
      const selector = store.overrideSelector(fromIssue.selectFiltered, []);
      fixture.detectChanges();
      expect(elements.length).toBe(0);
      const issues = [factory.entity(), factory.entity()];
      selector.setResult(issues);
      store.refreshState();
      fixture.detectChanges();
      elements = fixture.debugElement.queryAll(By.css('li'));
      expect(elements.length).toBe(issues.length);
    });

    it('should dispatch search', () => {
      const dispatchSpy = spyOn(store, 'dispatch');
      const text = 'abc';
      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = text;
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(dispatchSpy).toHaveBeenCalledWith(IssueActions.search({ text }));
    });
  });

  describe('Integration Tests', () => {
    let fixture: ComponentFixture<IssueListComponent>;
    let store: Store;
    let factory: IssueFactory;

    beforeEach(async () => {
      factory = new IssueFactory();

      await TestBed.configureTestingModule({
        declarations: [IssueListComponent],
        imports: [RouterTestingModule, StoreModule.forRoot(reducers)],
      }).compileComponents();

      store = TestBed.inject(Store);
      fixture = TestBed.createComponent(IssueListComponent);
      fixture.detectChanges();
    });

    it('should display issues', () => {
      let elements = fixture.debugElement.queryAll(By.css('li'));
      fixture.detectChanges();
      expect(elements.length).toBe(0);
      store.dispatch(IssueActions.submitSuccess({ issue: factory.entity() }));
      fixture.detectChanges();
      elements = fixture.debugElement.queryAll(By.css('li'));
      expect(elements.length).toBe(1);
    });
  });
});
