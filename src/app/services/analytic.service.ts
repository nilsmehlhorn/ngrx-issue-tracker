import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnalyticService {
  trackPageView(url: string): void {
    console.log(`Page View: ${url}`);
  }
}
