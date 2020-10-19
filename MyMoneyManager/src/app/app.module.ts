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
import { HPNavBarComponent } from './home-page/hp-nav-bar/hp-nav-bar.component';
import {AlertModule} from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent,
    DisplaySandboxComponent,
    TabLoginSigninComponent,
    TabLoginComponent,
    TabSigninComponent,
    HomePageComponent,
    HPNavBarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TabsModule.forRoot(),
        AlertModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
