import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../../_services/authentification.service';
import {AlertService} from '../../_services/alert.service';


@Component({
  selector: 'app-hp-connection',
  templateUrl: './hp-connection.component.html',
  styleUrls: ['./hp-connection.component.css']
})
export class HpConnectionComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authentificationService: AuthentificationService,
  ) {
    // redirect vers user si on est déjà connecté
    if (this.authentificationService.currentUserValue) {
      this.router.navigate(['/user/dashboard']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authentificationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['user/dashboard']);
        },
        error => {
          this.alertService.error(error, {autoClose: true, keepAfterRouteChange: true});
          this.loading = false;
        });
  }
}
