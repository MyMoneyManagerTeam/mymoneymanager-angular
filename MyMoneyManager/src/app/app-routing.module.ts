import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplaySandboxComponent} from './display-sandbox/display-sandbox.component';
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [{
    path: 'sandbox',
    component: DisplaySandboxComponent
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
