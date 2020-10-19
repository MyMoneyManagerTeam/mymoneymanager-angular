import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplaySandboxComponent} from './display-sandbox/display-sandbox.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HpHomeComponent} from "./home-page/hp-home/hp-home.component";
import {HpPresentationComponent} from "./home-page/hp-presentation/hp-presentation.component";
import {HpContactComponent} from "./home-page/hp-contact/hp-contact.component";
import {HpConnectionComponent} from "./home-page/hp-connection/hp-connection.component";

const routes: Routes = [{
    path: 'sandbox',
    component: DisplaySandboxComponent
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'hp-home',
    component: HpHomeComponent,
  },
  {
    path: 'hp-presentation',
    component: HpPresentationComponent,
  },
  {
    path: 'hp-contact',
    component: HpContactComponent,
  },
  {
    path: 'hp-connection',
    component: HpConnectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
