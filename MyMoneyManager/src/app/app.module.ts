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
import {FakeBackendProvider} from './_helpers/fake-backend.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import { HpRegisterComponent } from './home-page/hp-register/hp-register.component';
import { NotFoundComponent } from './global-components/not-found/not-found.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

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
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    FakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
