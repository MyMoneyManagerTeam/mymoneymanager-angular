import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersWithAccount, UserWithAccount} from "../../../../_models/user-with-account";
import {UserAccountToApi} from "../../../../_models/account.model";
import {User} from "../../../../_models/user.model";

@Component({
  selector: 'app-sim-list',
  templateUrl: './sim-list.component.html',
  styleUrls: ['./sim-list.component.css']
})
export class SimListComponent implements OnInit {

  @Input() usersWithAccount: UsersWithAccount = [];
  @Output() userChanged: EventEmitter<User> = new EventEmitter<User>();
  @Output() balanceChanged: EventEmitter<UserAccountToApi> = new EventEmitter<UserAccountToApi>();
  userAccount: UserAccountToApi;
  constructor() { }

  ngOnInit(): void {
  }

  updatePrivileges(user: User){
    this.userChanged.emit(user);
  }

  updateBalance(user: UserWithAccount) {
    if(user.amount!=null){
      this.userAccount = {userId: user.id, amount: user.amount};
      this.balanceChanged.emit(this.userAccount);
    }
    user.amount = 0;
  }
}
