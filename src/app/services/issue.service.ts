import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from '../models/issue';

@Injectable({ providedIn: 'root' })
export class IssueService {
  constructor(private http: HttpClient) {}

  save(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(`/api/issues`, issue);
  }
}
