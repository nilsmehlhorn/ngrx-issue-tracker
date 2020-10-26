import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesComponent } from './components/issues/issues.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'issues' },
  { path: 'issues', component: IssuesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
