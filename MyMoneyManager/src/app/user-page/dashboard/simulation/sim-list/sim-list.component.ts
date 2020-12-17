import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersWithAccount, UserWithAccount} from "../../../../_models/user-with-account";
import {UserAccountToApi} from "../../../../_models/account.model";

@Component({
  selector: 'app-sim-list',
  templateUrl: './sim-list.component.html',
  styleUrls: ['./sim-list.component.css']
})
export class SimListComponent implements OnInit {

  @Input() usersWithAccount: UsersWithAccount = [];
  @Output() userChanged: EventEmitter<UserWithAccount> = new EventEmitter<UserWithAccount>();
  @Output() balanceChanged: EventEmitter<UserWithAccount> = new EventEmitter<UserWithAccount>();
  constructor() { }

  ngOnInit(): void {
  }

  updateBalance(id: String, balance: number) {

    this.balanceChanged.emit();
  }
}
