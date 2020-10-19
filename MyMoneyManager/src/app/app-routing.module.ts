import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplaySandboxComponent} from './display-sandbox/display-sandbox.component';
import {HomePageComponent} from './home-page/home-page.component';
import {UserPageComponent} from './user-page/user-page.component';
import {ProfileComponent} from './user-page/profile/profile.component';
import {DashboardComponent} from './user-page/dashboard/dashboard.component';
import {SettingsComponent} from './user-page/settings/settings.component';
import {HelpComponent} from './user-page/help/help.component';

const routes: Routes = [{
    path: 'sandbox',
    component: DisplaySandboxComponent
  },
  {
    path: 'user',
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
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
