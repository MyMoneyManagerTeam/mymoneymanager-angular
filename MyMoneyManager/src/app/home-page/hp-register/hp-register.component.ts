import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {ErrorStateMatcher} from '@angular/material/core';
import {first} from 'rxjs/operators';
import {AuthentificationService} from '../../_services/authentification.service';
import {Router} from '@angular/router';
import {AlertService} from '../../_services/alert.service';
import {FileInput} from 'ngx-material-file-input';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

export class PasswordStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-hp-register',
  templateUrl: './hp-register.component.html',
  styleUrls: ['./hp-register.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class HpRegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthentificationService,
    private router: Router,
    private alertService: AlertService
  ) {}
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  matcher = new PasswordStateMatcher();
  countryList: { name: string, Dial_Code: string, ISO_Code: string }[];
  dialCode = '+32';
  loading = false;
  t: FileInput;
  imagesrc;

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      mailCtrl: ['', [
        Validators.required,
        Validators.pattern('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])')
      ]],
      passwords: this.formBuilder.group({
        passwordCtrl: ['', [
          Validators.required,
          Validators.pattern('^(((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])){3}|((?=.*\\d)(?=.*[a-z])(?=.*[!"#$%&\'()*+, \\-./:;<=>?@ [\\\\\\]^_`}|}~])){3}|((?=.*\\d)(?=.*[a-z])(?=.*[\u0080-\uffff])){3}|((?=.*\\d)(?=.*[A-Z])(?=.*[!"#$%&\'()*+, \\-./:;<=>?@ [\\\\\\]^_`}|}~])){3}|((?=.*\\d)(?=.*[A-Z])(?=.*[\u0080-\uffff])){3}|((?=.*\\d)(?=.*[!"#$%&\'()*+, \\-./:;<=>?@ [\\\\\\]^_`}|}~])(?=.*[\u0080-\uffff])){3}|((?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&\'()*+, \\-./:;<=>?@ [\\\\\\]^_`}|}~])){3}|((?=.*[a-z])(?=.*[A-Z])(?=.*[\u0080-\uffff])){3}|((?=.*[a-z])(?=.*[!"#$%&\'()*+, \\-./:;<=>?@ [\\\\\\]^_`}|}~])(?=.*[\u0080-\uffff])){3}|((?=.*[A-Z])(?=.*[!"#$%&\'()*+, \\-./:;<=>?@ [\\\\\\]^_`}|}~])(?=.*[\u0080-\uffff])){3}).{8,}$')
        ]],
        confirmPasswordCtrl: ['']
      }, {validators: this.checkPassword}),
    });
    this.secondFormGroup = this.formBuilder.group({
      nameCtrl: ['', Validators.required],
      firstnameCtrl: ['', Validators.required],
      countryCtrl: ['', Validators.required],
      regionCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      postalCodeCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      imageCtrl: [''],
    });
  }
  submit(): void  {
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      return;
    }

    this.loading = true;
    this.authService.signin({
        mail: this.firstFormGroup.controls.mailCtrl.value,
        password: this.firstFormGroup.controls.passwords.get('passwordCtrl').value,
        firstName: this.secondFormGroup.controls.firstnameCtrl.value,
        lastName: this.secondFormGroup.controls.nameCtrl.value,
        country: this.secondFormGroup.controls.countryCtrl.value,
        area: this.secondFormGroup.controls.regionCtrl.value,
        address: this.secondFormGroup.controls.addressCtrl.value,
        zip: this.secondFormGroup.controls.postalCodeCtrl.value.parseInt(),
        city: this.secondFormGroup.controls.cityCtrl.value,
        picture: this.secondFormGroup.controls.imageCtrl.value ? this.secondFormGroup.controls.imageCtrl.value.files[0] : null
      }
    )
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Compte créé, veuillez valider votre compte avec votre lien d\'activation)',
            {autoClose: true, keepAfterRouteChange: true});
          // this.router.navigate(['user/dashboard']);
        },
        error => {
          this.alertService.error(error, {autoClose: true, keepAfterRouteChange: true});
          this.loading = false;
        });
    this.loading = false;
  }

  checkPassword(group: FormGroup){
    const password = group.controls.passwordCtrl.value;
    const confirmPassword = group.controls.confirmPasswordCtrl.value;

    return password === confirmPassword ? null : {notSame: true};
  }

  getSrc(): void {
    if (!this.secondFormGroup.controls.imageCtrl.value) {
      this.imagesrc = null;
      return;
    }
    const reader = this.secondFormGroup.controls.imageCtrl.value.files[0].stream().getReader();
    this.secondFormGroup.controls.imageCtrl.value.files[0].arrayBuffer().then(value => {
      let arrayBufferView = new Uint8Array(value);
      let blob = new Blob([arrayBufferView], {type: 'image' } );
      let urlCreator = window.URL || window.webkitURL;
      let imageUrl = urlCreator.createObjectURL(blob);
      this.imagesrc = imageUrl;
    });
  }
}
@Pipe({ name: 'safeResourceUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  public transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
