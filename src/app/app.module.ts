import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuesComponent } from './components/issues/issues.component';
import { modules } from './modules/modules';
import { reducers } from './store';

@NgModule({
  declarations: [AppComponent, IssuesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
