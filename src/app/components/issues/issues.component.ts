import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Issue } from '../../models/issue';
import { IssueFacade } from '../../store/issue/issue.facade';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  issues$: Observable<Issue[]> = EMPTY;

  constructor(private facade: IssueFacade) {}

  ngOnInit(): void {
    this.issues$ = this.facade.issues$;
  }

  onSearch(text: string): void {
    this.facade.search(text);
  }

  onResolve(issue: Issue): void {
    this.facade.resolve(issue.id);
  }

  onSubmit(issue: Issue): void {
    this.facade.submit(issue);
  }
}
