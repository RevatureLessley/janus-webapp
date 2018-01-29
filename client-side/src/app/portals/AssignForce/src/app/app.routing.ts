import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OverviewComponent} from './overview/overview.component';
import {BatchesComponent} from './batches/batches.component';
import {LocationsComponent} from './locations/locations.component';
import {CurriculaComponent} from './curricula/curricula.component';
import {TrainersComponent} from './trainers/trainers.component';
import {ProfileComponent} from './profile/profile.component';
import {ReportsComponent} from './reports/reports.component';
import {SettingsComponent} from './settings/settings.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'batches',
    component: BatchesComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'curricula',
    component: CurriculaComponent
  },
  {
    path: 'trainers',
    component: TrainersComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
