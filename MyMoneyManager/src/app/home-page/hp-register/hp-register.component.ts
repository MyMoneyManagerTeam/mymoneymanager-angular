import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hp-register',
  templateUrl: './hp-register.component.html',
  styleUrls: ['./hp-register.component.css']
})
export class HpRegisterComponent implements OnInit {
   form: FormGroup;

  constructor(private fb: FormBuilder) {
    FormBuilder: this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(6)]
      ],
      confirmPassword: ['', Validators.required],
      tel: ['', Validators.required],
      pays: ['', Validators.required],
      adresse: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  register() {

  }
}
