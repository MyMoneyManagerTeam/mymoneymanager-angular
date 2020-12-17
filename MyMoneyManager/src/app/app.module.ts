import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaySandboxComponent } from './display-sandbox/display-sandbox.component';
import { TabLoginSigninComponent } from './display-sandbox/tab-login-signin/tab-login-signin.component';
import { TabLoginComponent } from './display-sandbox/tab-login-signin/tab-login/tab-login.component';
import { TabSigninComponent } from './display-sandbox/tab-login-signin/tab-signin/tab-signin.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { HomePageComponent } from './home-page/home-page.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import { UserPageComponent } from './user-page/user-page.component';
import { UserNavbarComponent } from './user-page/user-navbar/user-navbar.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileComponent } from './user-page/profile/profile.component';
import { DashboardComponent } from './user-page/dashboard/dashboard.component';
import { SettingsComponent } from './user-page/settings/settings.component';
import { HelpComponent } from './user-page/help/help.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { HpHomeComponent } from './home-page/hp-home/hp-home.component';
import { HpPresentationComponent } from './home-page/hp-presentation/hp-presentation.component';
import { HpContactComponent } from './home-page/hp-contact/hp-contact.component';
import { HpConnectionComponent } from './home-page/hp-connection/hp-connection.component';
import { HpNavBarComponent } from './home-page/hp-nav-bar/hp-nav-bar.component';
import { AlertComponent } from './global-components/alert/alert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {HpRegisterComponent, SafeUrlPipe} from './home-page/hp-register/hp-register.component';
import { NotFoundComponent } from './global-components/not-found/not-found.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SummaryComponent } from './user-page/dashboard/summary/summary.component';
import { JarsComponent } from './user-page/dashboard/jars/jars.component';
import { ManageComponent } from './user-page/dashboard/manage/manage.component';
import { ConsultComponent } from './user-page/dashboard/consult/consult.component';
import { SimulationComponent } from './user-page/dashboard/simulation/simulation.component';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import { JarsListComponent } from './user-page/dashboard/jars/jars-list/jars-list.component';
import { JarsFormComponent } from './user-page/dashboard/jars/jars-form/jars-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { JarModifyDialogComponent } from './user-page/dashboard/jars/jars-list/jar-modify-dialog/jar-modify-dialog.component';
import { JarDeleteDialogComponent } from './user-page/dashboard/jars/jars-list/jar-delete-dialog/jar-delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ChartsModule} from 'ng2-charts';
import { AccountChartsComponent } from './user-page/dashboard/summary/account-charts/account-charts.component';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { AccountSummaryComponent } from './user-page/dashboard/summary/account-summary/account-summary.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ConsultTableComponent } from './user-page/dashboard/consult/consult-table/consult-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {SimListComponent} from "./user-page/dashboard/simulation/sim-list/sim-list.component";

@NgModule({
    declarations: [
        AppComponent,
        DisplaySandboxComponent,
        TabLoginSigninComponent,
        TabLoginComponent,
        TabSigninComponent,
        HomePageComponent,
        UserPageComponent,
        UserNavbarComponent,
        ProfileComponent,
        DashboardComponent,
        SettingsComponent,
        HelpComponent,
        HpHomeComponent,
        HpPresentationComponent,
        HpContactComponent,
        HpConnectionComponent,
        HpNavBarComponent,
        AlertComponent,
        HpRegisterComponent,
        NotFoundComponent,
        SummaryComponent,
        JarsComponent,
        ManageComponent,
        ConsultComponent,
        SimulationComponent,
        SafeUrlPipe,
        JarsListComponent,
        JarsFormComponent,
        JarModifyDialogComponent,
        JarDeleteDialogComponent,
        AccountChartsComponent,
        AccountSummaryComponent,
        ConsultTableComponent,
        SimListComponent,
        SimListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    AlertModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MaterialFileInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    ChartsModule,
    MatSidenavModule,
    ClipboardModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
