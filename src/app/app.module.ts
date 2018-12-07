import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
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
  MatToolbarModule,
  MatGridListModule,
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule
} from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ActivityComponent } from './components/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MapComponent,
    WeatherComponent,
    ChecklistComponent,
    ActivityComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
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
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
