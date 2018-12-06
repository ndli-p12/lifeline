import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule, MatGridListModule, MatMenuModule
} from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
