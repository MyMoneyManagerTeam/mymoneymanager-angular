import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplaySandboxComponent} from './display-sandbox/display-sandbox.component';
import {HomePageComponent} from './home-page/home-page.component';
import {UserPageComponent} from './user-page/user-page.component';
import {ProfileComponent} from './user-page/profile/profile.component';
import {DashboardComponent} from './user-page/dashboard/dashboard.component';
import {SettingsComponent} from './user-page/settings/settings.component';
import {HelpComponent} from './user-page/help/help.component';
import {HpHomeComponent} from './home-page/hp-home/hp-home.component';
import {HpPresentationComponent} from './home-page/hp-presentation/hp-presentation.component';
import {HpContactComponent} from './home-page/hp-contact/hp-contact.component';
import {HpConnectionComponent} from './home-page/hp-connection/hp-connection.component';
import {AuthGuard} from './_helpers/auth.guard';

const routes: Routes = [{
    path: 'sandbox',
    component: DisplaySandboxComponent
  },
  {
    path: 'user',
    component: UserPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'help',
        component: HelpComponent,
      },
    ],
  },
  {
    path: '',
    component: HpHomeComponent,
  },
  {
    path: 'home',
    component: HpHomeComponent,
  },
  {
    path: 'presentation',
    component: HpPresentationComponent,
  },
  {
    path: 'contact',
    component: HpContactComponent,
  },
  {
    path: 'connection',
    component: HpConnectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
