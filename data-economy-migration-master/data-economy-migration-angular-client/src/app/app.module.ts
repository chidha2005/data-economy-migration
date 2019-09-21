import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { FakeBackendProvider } from './core/helpers/fake-backend';

import { LayoutsModule } from './layouts/layouts.module';
import { UIModule } from './shared/ui/ui.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  NgbDropdownModule,
  NgbTabsetModule,
  NgbAccordionModule,
  NgbCollapseModule,
  NgbModalModule,
  NgbProgressbarModule,
  NgbAlertModule,
  NgbToastModule,
  NgbPopoverModule
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutsModule,
    UIModule,
    AppRoutingModule,
    NgbDropdownModule,
    NgbTabsetModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbProgressbarModule,
    NgbAlertModule,
    NgbToastModule,
    NgbPopoverModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    FakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
