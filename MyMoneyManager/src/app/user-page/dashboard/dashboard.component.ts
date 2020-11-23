import { Component, OnInit } from '@angular/core';
import {JarService} from '../../_services/jar.service';
import {AccountService} from '../../_services/account.service';
import {Jars} from '../../_models/jar.model';
import {UserAccount} from '../../_models/account.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
