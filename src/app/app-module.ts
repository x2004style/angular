import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CutTextPipe } from './pipes/cut-text-pipe';
import { SortDataPipe } from './pipes/sort-data-pipe';
import { Child } from './components/child/child';
import { NgContentExample } from './components/ng-content-example/ng-content-example';

@NgModule({
  declarations: [
    App,
    CutTextPipe,
    SortDataPipe,
    Child,
    NgContentExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
