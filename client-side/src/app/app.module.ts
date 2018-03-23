import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NavModule } from './nav/nav.module';
import { JanusComponent } from './Janus/janus.component';
import { ChuckNorrisService } from './services/chuck-norris.service';
import { CategoriesService } from './portals/Caliber/services/categories.service';
import { Trainer } from './entities/Trainer';


import { ReportingService } from './services/reporting.service';
import { PDFService } from './services/pdf.service';
import { CaliberModule } from './portals/Caliber/caliber.module';
import { TraineeTechSkillsComponent } from './portals/Caliber/reports/trainee-tech-skills/trainee-tech-skills.component';
import { HttpClientModule } from '@angular/common/http';
import { RoleGuard } from './role-guard';
import { CookieService } from 'ngx-cookie-service';
import {AuthenticationService} from "./portals/Caliber/services/authentication.service";
import {RequestService} from "./portals/Track-Force/services/request-service/request.service";


// loading routes from child modules this way will lazy load them
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: JanusComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'Caliber', loadChildren: './portals/Caliber/caliber.module#CaliberModule' },
      { path: 'AssignForce', loadChildren: './portals/Assign-Force/assign-force.module#AssignForceModule' },
      { path: 'TrackForce', loadChildren: './portals/Track-Force/track-force.module#TrackForceModule' },
      { path: '**', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    NavModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ChartsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    JanusComponent,
  ],
  providers: [
    ChuckNorrisService,
    ReportingService,
    PDFService,
    RoleGuard,
    CookieService,
    AuthenticationService,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
