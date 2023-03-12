import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Issue } from '../models/issue';
import { randomId } from '../random-id';

interface Database {
  issues: Issue[];
}

@Injectable()
export class DatabaseService implements InMemoryDbService {
  createDb(): Database {
    return {
      issues: [
        {
          id: this.genId(),
          title: 'Example Issue',
          description: 'This is a pre-existing issue',
          priority: 'medium',
          resolved: false,
        },
      ],
    };
  }

  patch({
    collectionName,
    collection,
    id,
    utils,
  }: RequestInfo): Observable<Response> | undefined {
    if (collectionName === 'issues' && id) {
      const issue = collection.find((i: Issue) => i.id === id);
      if (issue) {
        const resolved = { ...issue, resolved: true };
        collection[collection.indexOf(issue)] = resolved;
        return utils.createResponse$(() => ({
          body: resolved,
          status: 200,
          statusText: 'OK',
        }));
      }
    }
    return undefined;
  }

  genId(): string {
    return randomId();
  }
}
