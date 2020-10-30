import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { Issue } from '../models/issue';
import * as fromIssue from '../store/issue/issue.selectors';

@Injectable({ providedIn: 'root' })
export class IssueCollectionService extends EntityCollectionServiceBase<Issue> {
  active$: Observable<Issue>;

  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Issue', elementsFactory);
    this.active$ = this.store.select(fromIssue.selectActive);
  }

  resolve(issue: Issue): Observable<Issue> {
    return this.update({ ...issue, resolved: true });
  }
}
