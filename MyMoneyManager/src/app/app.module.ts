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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    AlertModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
