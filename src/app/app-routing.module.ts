import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ActivityComponent } from './components/activity/activity.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'map', component: MapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'activity', component: ActivityComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
