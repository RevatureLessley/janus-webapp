import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {SpringXsrfInterceptor} from './interceptors/springXsrfInterceptor';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { OverviewComponent } from './overview/overview.component';
import { BatchesComponent } from './batches/batches.component';
import {
  LocationAddBuildingDialogComponent,
  LocationAddLocationDialogComponent, LocationAddRoomDialogComponent, LocationDeleteBuildingDialogComponent,
  LocationDeleteLocationDialogComponent, LocationDeleteRoomDialogComponent,
  LocationEditBuildingDialogComponent,
  LocationEditLocationDialogComponent, LocationEditRoomDialogComponent,
  LocationsComponent
} from './locations/locations.component';
import { CurriculaComponent } from './curricula/curricula.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import {AppRouting} from './app.routing';
import {TrainerService} from './services/trainer.service';
import {SkillService} from './services/skill.service';
import {S3CredentialService} from './services/s3-credential.service';
import {UrlService} from './services/url.service';
import {
  MatButtonModule, MatCardModule, MatCheckbox, MatCheckboxModule, MatChipsModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatOptionModule,
  MatNativeDateModule,
  MatListModule,
  MatMenuModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatDialogModule, MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    OverviewComponent,
    BatchesComponent,
    LocationsComponent,
    CurriculaComponent,
    TrainersComponent,
    ProfileComponent,
    ReportsComponent,
    SettingsComponent,
    LocationAddLocationDialogComponent,
    LocationDeleteLocationDialogComponent,
    LocationEditLocationDialogComponent,
    LocationAddBuildingDialogComponent,
    LocationDeleteBuildingDialogComponent,
    LocationEditBuildingDialogComponent,
    LocationAddRoomDialogComponent,
    LocationDeleteRoomDialogComponent,
    LocationEditRoomDialogComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    NgbModule,
    FormsModule,
    CommonModule,
    AppRouting,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [TrainerService,
    SkillService,
    S3CredentialService,
    UrlService,
    {provide: HTTP_INTERCEPTORS,
      useClass: SpringXsrfInterceptor,
      multi: true}],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    LocationAddLocationDialogComponent,
    LocationDeleteLocationDialogComponent,
    LocationEditLocationDialogComponent,
    LocationAddBuildingDialogComponent,
    LocationDeleteBuildingDialogComponent,
    LocationEditBuildingDialogComponent,
    LocationAddRoomDialogComponent,
    LocationDeleteRoomDialogComponent,
    LocationEditRoomDialogComponent
  ]
})

export class AppModule {}
