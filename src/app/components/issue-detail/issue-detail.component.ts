import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Issue } from '../../models/issue';
import * as fromIssue from '../../store/issue/issue.selectors';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss'],
})
export class IssueDetailComponent {
  issue$: Observable<Issue>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.issue$ = this.route.params.pipe(
      switchMap((params) =>
        this.store.select(fromIssue.selectOne(params['id']))
      )
    );
  }
}
