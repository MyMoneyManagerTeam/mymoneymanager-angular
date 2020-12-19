import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router, NavigationEnd, NavigationStart} from '@angular/router';
import {DisplaySandboxComponent} from './display-sandbox/display-sandbox.component';
import {UserPageComponent} from './user-page/user-page.component';
import {ProfileComponent} from './user-page/profile/profile.component';
import {DashboardComponent} from './user-page/dashboard/dashboard.component';
import {SettingsComponent} from './user-page/settings/settings.component';
import {HelpComponent} from './user-page/help/help.component';
import {HpHomeComponent} from './home-page/hp-home/hp-home.component';
import {HpContactComponent} from './home-page/hp-contact/hp-contact.component';
import {HpConnectionComponent} from './home-page/hp-connection/hp-connection.component';
import {AuthGuard} from './_helpers/auth.guard';
import {HpRegisterComponent} from './home-page/hp-register/hp-register.component';
import {NotFoundComponent} from './global-components/not-found/not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SummaryComponent} from './user-page/dashboard/summary/summary.component';
import {JarsComponent} from './user-page/dashboard/jars/jars.component';
import {ManageComponent} from './user-page/dashboard/manage/manage.component';
import {ConsultComponent} from './user-page/dashboard/consult/consult.component';
import {SimulationComponent} from './user-page/dashboard/simulation/simulation.component';

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
        children:[
          {
            path:'',
            component: SummaryComponent
          },
          {
            path:'summary',
            component:SummaryComponent
          },
          {
            path:'jars',
            component:JarsComponent
          },
          {
            path:'manage',
            component: ManageComponent
          },
          {
            path:'consult',
            component: ConsultComponent
          },
          {
            path:'simulation',
            component:SimulationComponent
          },
          {
            path:'', redirectTo:'summary',pathMatch:'full'
          }
        ]
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
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'index',
        component: HpHomeComponent,
      },
      {
        path: 'contact',
        component: HpContactComponent,
      },
      {
        path: 'connection',
        component: HpConnectionComponent,
      },
      {
        path: 'register',
        component: HpRegisterComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/index',
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.routeEvent(this.router);
  }

  private routeEvent(router: Router): void {
    router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        if (e.url.includes('/home') && !e.url.includes('/home/')) {
          router.navigate(['/home/index']);
        }
        if (e.url.includes('/user') && !e.url.includes('/user/')) {
          router.navigate(['/user/dashboard/summary']);
        }
        if (e.url.includes('/dashboard') && !e.url.includes('/dashboard/')) {
          router.navigate(['/user/dashboard/summary']);
        }
      }
    });
  }
}
