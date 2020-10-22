import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hp-contact',
  templateUrl: './hp-contact.component.html',
  styleUrls: ['./hp-contact.component.css']
})
export class HpContactComponent implements OnInit {

  form:FormGroup = this.fb.group({
    email:['',Validators.required],
    name:['',Validators.required],
    message:['',Validators.required]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  sendMessage() {

  }
}
