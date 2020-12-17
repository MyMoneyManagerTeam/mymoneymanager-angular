import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransactionService} from "../../../_services/transaction.service";
import {Parser} from "@angular/compiler";
import {AlertService} from "../../../_services/alert.service";
import {AuthentificationService} from "../../../_services/authentification.service";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  transaction_form:FormGroup = this.fb.group({
    name_receiver:['',Validators.required],
    id_receiver:['',Validators.required],
    value_receiver:['',Validators.required],
    description_receiver:['',Validators.required]
  });

  constructor(public fb:FormBuilder,public transactionService: TransactionService,private alertService:AlertService,private authentificationService:AuthentificationService) { }

  private loading:Boolean = false;
  ngOnInit(): void {
  }

  createTransaction(){

    this.loading = true;
    this.transactionService.create({
      emitterId: this.authentificationService.currentUserValue.id,
      receiverId: this.transaction_form.controls['id_receiver'].value,
      amount: this.transaction_form.controls['value_receiver'].value,
      transactionDate: Date.now(),
      description: this.transaction_form.controls['description_receiver'].value,
      emitterName: this.authentificationService.currentUserValue.firstName,
      receiverName: this.transaction_form.controls['name_receiver'].value
    }).subscribe(
      data => {
        this.alertService.success('Transaction réalisée',
          {autoClose: true, keepAfterRouteChange: true}),
        this.transaction_form.reset();

      },
      error => {
        this.alertService.error(error, {autoClose: true, keepAfterRouteChange: true});
        this.loading = false;
      });
    this.loading = false;
  }
}
