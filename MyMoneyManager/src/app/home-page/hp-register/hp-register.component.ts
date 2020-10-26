import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {ErrorStateMatcher} from '@angular/material/core';
import {first} from 'rxjs/operators';
import {AuthentificationService} from '../../_services/authentification.service';
import {Router} from '@angular/router';
import {AlertService} from '../../_services/alert.service';

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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  matcher = new PasswordStateMatcher();
  countryList: { name: string, Dial_Code: string, ISO_Code: string }[];
  dialCode = '+32';
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthentificationService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loadJSON();
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
    });
  }
  submit(): void  {
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      return;
    }

    this.loading = true;
    this.authService.signin(
      this.firstFormGroup.controls.mailCtrl.value,
      this.firstFormGroup.controls.passwords.get('passwordCtrl').value,
      this.secondFormGroup.controls.firstnameCtrl.value,
      this.secondFormGroup.controls.nameCtrl.value,
      this.secondFormGroup.controls.countryCtrl.value,
      this.secondFormGroup.controls.regionCtrl.value,
      this.secondFormGroup.controls.addressCtrl.value,
      this.secondFormGroup.controls.postalCodeCtrl.value,
      this.secondFormGroup.controls.cityCtrl.value
    )
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Compte créé, veuillez valider votre compte avec votre lien d\'activation)',
            {autoClose: true, keepAfterRouteChange: true});
          //this.router.navigate(['user/dashboard']);
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

  loadJSON(): void { // lire des fichiers Json est bug
    this.countryList = [
      {
        name: 'Afghanistan',
        Dial_Code: '+93',
        ISO_Code: 'AF'
      },
      {
        name: 'Aland Islands',
        Dial_Code: '+358',
        ISO_Code: 'AX'
      },
      {
        name: 'Albania',
        Dial_Code: '+355',
        ISO_Code: 'AL'
      },
      {
        name: 'Algeria',
        Dial_Code: '+213',
        ISO_Code: 'DZ'
      },
      {
        name: 'AmericanSamoa',
        Dial_Code: '+1684',
        ISO_Code: 'AS'
      },
      {
        name: 'Andorra',
        Dial_Code: '+376',
        ISO_Code: 'AD'
      },
      {
        name: 'Angola',
        Dial_Code: '+244',
        ISO_Code: 'AO'
      },
      {
        name: 'Anguilla',
        Dial_Code: '+1264',
        ISO_Code: 'AI'
      },
      {
        name: 'Antarctica',
        Dial_Code: '+672',
        ISO_Code: 'AQ'
      },
      {
        name: 'Antigua and Barbuda',
        Dial_Code: '+1268',
        ISO_Code: 'AG'
      },
      {
        name: 'Argentina',
        Dial_Code: '+54',
        ISO_Code: 'AR'
      },
      {
        name: 'Armenia',
        Dial_Code: '+374',
        ISO_Code: 'AM'
      },
      {
        name: 'Aruba',
        Dial_Code: '+297',
        ISO_Code: 'AW'
      },
      {
        name: 'Ascension Island',
        Dial_Code: '+247',
        ISO_Code: 'AC'
      },
      {
        name: 'Australia',
        Dial_Code: '+61',
        ISO_Code: 'AU'
      },
      {
        name: 'Austria',
        Dial_Code: '+43',
        ISO_Code: 'AT'
      },
      {
        name: 'Azerbaijan',
        Dial_Code: '+994',
        ISO_Code: 'AZ'
      },
      {
        name: 'Bahamas',
        Dial_Code: '+1242',
        ISO_Code: 'BS'
      },
      {
        name: 'Bahrain',
        Dial_Code: '+973',
        ISO_Code: 'BH'
      },
      {
        name: 'Bangladesh',
        Dial_Code: '+880',
        ISO_Code: 'BD'
      },
      {
        name: 'Barbados',
        Dial_Code: '+1246',
        ISO_Code: 'BB'
      },
      {
        name: 'Belarus',
        Dial_Code: '+375',
        ISO_Code: 'BY'
      },
      {
        name: 'Belgium',
        Dial_Code: '+32',
        ISO_Code: 'BE'
      },
      {
        name: 'Belize',
        Dial_Code: '+501',
        ISO_Code: 'BZ'
      },
      {
        name: 'Benin',
        Dial_Code: '+229',
        ISO_Code: 'BJ'
      },
      {
        name: 'Bermuda',
        Dial_Code: '+1441',
        ISO_Code: 'BM'
      },
      {
        name: 'Bhutan',
        Dial_Code: '+975',
        ISO_Code: 'BT'
      },
      {
        name: 'Bolivia',
        Dial_Code: '+591',
        ISO_Code: 'BO'
      },
      {
        name: 'Bosnia and Herzegovina',
        Dial_Code: '+387',
        ISO_Code: 'BA'
      },
      {
        name: 'Botswana',
        Dial_Code: '+267',
        ISO_Code: 'BW'
      },
      {
        name: 'Brazil',
        Dial_Code: '+55',
        ISO_Code: 'BR'
      },
      {
        name: 'British Indian Ocean Territory',
        Dial_Code: '+246',
        ISO_Code: 'IO'
      },
      {
        name: 'Brunei Darussalam',
        Dial_Code: '+673',
        ISO_Code: 'BN'
      },
      {
        name: 'Bulgaria',
        Dial_Code: '+359',
        ISO_Code: 'BG'
      },
      {
        name: 'Burkina Faso',
        Dial_Code: '+226',
        ISO_Code: 'BF'
      },
      {
        name: 'Burundi',
        Dial_Code: '+257',
        ISO_Code: 'BI'
      },
      {
        name: 'Cambodia',
        Dial_Code: '+855',
        ISO_Code: 'KH'
      },
      {
        name: 'Cameroon',
        Dial_Code: '+237',
        ISO_Code: 'CM'
      },
      {
        name: 'Canada',
        Dial_Code: '+1',
        ISO_Code: 'CA'
      },
      {
        name: 'Cape Verde',
        Dial_Code: '+238',
        ISO_Code: 'CV'
      },
      {
        name: 'Cayman Islands',
        Dial_Code: '+1345',
        ISO_Code: 'KY'
      },
      {
        name: 'Central African Republic',
        Dial_Code: '+236',
        ISO_Code: 'CF'
      },
      {
        name: 'Chad',
        Dial_Code: '+235',
        ISO_Code: 'TD'
      },
      {
        name: 'Chile',
        Dial_Code: '+56',
        ISO_Code: 'CL'
      },
      {
        name: 'China',
        Dial_Code: '+86',
        ISO_Code: 'CN'
      },
      {
        name: 'Christmas Island',
        Dial_Code: '+61',
        ISO_Code: 'CX'
      },
      {
        name: 'Cocos (Keeling) Islands',
        Dial_Code: '+61',
        ISO_Code: 'CC'
      },
      {
        name: 'Colombia',
        Dial_Code: '+57',
        ISO_Code: 'CO'
      },
      {
        name: 'Comoros',
        Dial_Code: '+269',
        ISO_Code: 'KM'
      },
      {
        name: 'Congo',
        Dial_Code: '+242',
        ISO_Code: 'CG'
      },
      {
        name: 'Cook Islands',
        Dial_Code: '+682',
        ISO_Code: 'CK'
      },
      {
        name: 'Costa Rica',
        Dial_Code: '+506',
        ISO_Code: 'CR'
      },
      {
        name: 'Croatia',
        Dial_Code: '+385',
        ISO_Code: 'HR'
      },
      {
        name: 'Cuba',
        Dial_Code: '+53',
        ISO_Code: 'CU'
      },
      {
        name: 'Cyprus',
        Dial_Code: '+357',
        ISO_Code: 'CY'
      },
      {
        name: 'Czech Republic',
        Dial_Code: '+420',
        ISO_Code: 'CZ'
      },
      {
        name: 'Democratic Republic of the Congo',
        Dial_Code: '+243',
        ISO_Code: 'CD'
      },
      {
        name: 'Denmark',
        Dial_Code: '+45',
        ISO_Code: 'DK'
      },
      {
        name: 'Djibouti',
        Dial_Code: '+253',
        ISO_Code: 'DJ'
      },
      {
        name: 'Dominica',
        Dial_Code: '+1767',
        ISO_Code: 'DM'
      },
      {
        name: 'Dominican Republic',
        Dial_Code: '+1849',
        ISO_Code: 'DO'
      },
      {
        name: 'Ecuador',
        Dial_Code: '+593',
        ISO_Code: 'EC'
      },
      {
        name: 'Egypt',
        Dial_Code: '+20',
        ISO_Code: 'EG'
      },
      {
        name: 'El Salvador',
        Dial_Code: '+503',
        ISO_Code: 'SV'
      },
      {
        name: 'Equatorial Guinea',
        Dial_Code: '+240',
        ISO_Code: 'GQ'
      },
      {
        name: 'Eritrea',
        Dial_Code: '+291',
        ISO_Code: 'ER'
      },
      {
        name: 'Estonia',
        Dial_Code: '+372',
        ISO_Code: 'EE'
      },
      {
        name: 'Eswatini',
        Dial_Code: '+268',
        ISO_Code: 'SZ'
      },
      {
        name: 'Ethiopia',
        Dial_Code: '+251',
        ISO_Code: 'ET'
      },
      {
        name: 'Falkland Islands (Malvinas)',
        Dial_Code: '+500',
        ISO_Code: 'FK'
      },
      {
        name: 'Faroe Islands',
        Dial_Code: '+298',
        ISO_Code: 'FO'
      },
      {
        name: 'Fiji',
        Dial_Code: '+679',
        ISO_Code: 'FJ'
      },
      {
        name: 'Finland',
        Dial_Code: '+358',
        ISO_Code: 'FI'
      },
      {
        name: 'France',
        Dial_Code: '+33',
        ISO_Code: 'FR'
      },
      {
        name: 'French Guiana',
        Dial_Code: '+594',
        ISO_Code: 'GF'
      },
      {
        name: 'French Polynesia',
        Dial_Code: '+689',
        ISO_Code: 'PF'
      },
      {
        name: 'Gabon',
        Dial_Code: '+241',
        ISO_Code: 'GA'
      },
      {
        name: 'Gambia',
        Dial_Code: '+220',
        ISO_Code: 'GM'
      },
      {
        name: 'Georgia',
        Dial_Code: '+995',
        ISO_Code: 'GE'
      },
      {
        name: 'Germany',
        Dial_Code: '+49',
        ISO_Code: 'DE'
      },
      {
        name: 'Ghana',
        Dial_Code: '+233',
        ISO_Code: 'GH'
      },
      {
        name: 'Gibraltar',
        Dial_Code: '+350',
        ISO_Code: 'GI'
      },
      {
        name: 'Greece',
        Dial_Code: '+30',
        ISO_Code: 'GR'
      },
      {
        name: 'Greenland',
        Dial_Code: '+299',
        ISO_Code: 'GL'
      },
      {
        name: 'Grenada',
        Dial_Code: '+1473',
        ISO_Code: 'GD'
      },
      {
        name: 'Guadeloupe',
        Dial_Code: '+590',
        ISO_Code: 'GP'
      },
      {
        name: 'Guam',
        Dial_Code: '+1671',
        ISO_Code: 'GU'
      },
      {
        name: 'Guatemala',
        Dial_Code: '+502',
        ISO_Code: 'GT'
      },
      {
        name: 'Guernsey',
        Dial_Code: '+44',
        ISO_Code: 'GG'
      },
      {
        name: 'Guinea',
        Dial_Code: '+224',
        ISO_Code: 'GN'
      },
      {
        name: 'Guinea-Bissau',
        Dial_Code: '+245',
        ISO_Code: 'GW'
      },
      {
        name: 'Guyana',
        Dial_Code: '+592',
        ISO_Code: 'GY'
      },
      {
        name: 'Haiti',
        Dial_Code: '+509',
        ISO_Code: 'HT'
      },
      {
        name: 'Holy See (Vatican City State)',
        Dial_Code: '+379',
        ISO_Code: 'VA'
      },
      {
        name: 'Honduras',
        Dial_Code: '+504',
        ISO_Code: 'HN'
      },
      {
        name: 'Hong Kong',
        Dial_Code: '+852',
        ISO_Code: 'HK'
      },
      {
        name: 'Hungary',
        Dial_Code: '+36',
        ISO_Code: 'HU'
      },
      {
        name: 'Iceland',
        Dial_Code: '+354',
        ISO_Code: 'IS'
      },
      {
        name: 'India',
        Dial_Code: '+91',
        ISO_Code: 'IN'
      },
      {
        name: 'Indonesia',
        Dial_Code: '+62',
        ISO_Code: 'ID'
      },
      {
        name: 'Iran',
        Dial_Code: '+98',
        ISO_Code: 'IR'
      },
      {
        name: 'Iraq',
        Dial_Code: '+964',
        ISO_Code: 'IQ'
      },
      {
        name: 'Ireland',
        Dial_Code: '+353',
        ISO_Code: 'IE'
      },
      {
        name: 'Isle of Man',
        Dial_Code: '+44',
        ISO_Code: 'IM'
      },
      {
        name: 'Israel',
        Dial_Code: '+972',
        ISO_Code: 'IL'
      },
      {
        name: 'Italy',
        Dial_Code: '+39',
        ISO_Code: 'IT'
      },
      {
        name: 'Ivory Coast',
        Dial_Code: '+225',
        ISO_Code: 'CI'
      },
      {
        name: 'Jamaica',
        Dial_Code: '+1876',
        ISO_Code: 'JM'
      },
      {
        name: 'Japan',
        Dial_Code: '+81',
        ISO_Code: 'JP'
      },
      {
        name: 'Jersey',
        Dial_Code: '+44',
        ISO_Code: 'JE'
      },
      {
        name: 'Jordan',
        Dial_Code: '+962',
        ISO_Code: 'JO'
      },
      {
        name: 'Kazakhstan',
        Dial_Code: '+77',
        ISO_Code: 'KZ'
      },
      {
        name: 'Kenya',
        Dial_Code: '+254',
        ISO_Code: 'KE'
      },
      {
        name: 'Kiribati',
        Dial_Code: '+686',
        ISO_Code: 'KI'
      },
      {
        name: 'Korea, Democratic People\'s Republic of Korea',
        Dial_Code: '+850',
        ISO_Code: 'KP'
      },
      {
        name: 'Korea, Republic of South Korea',
        Dial_Code: '+82',
        ISO_Code: 'KR'
      },
      {
        name: 'Kosovo',
        Dial_Code: '+383',
        ISO_Code: 'XK'
      },
      {
        name: 'Kuwait',
        Dial_Code: '+965',
        ISO_Code: 'KW'
      },
      {
        name: 'Kyrgyzstan',
        Dial_Code: '+996',
        ISO_Code: 'KG'
      },
      {
        name: 'Laos',
        Dial_Code: '+856',
        ISO_Code: 'LA'
      },
      {
        name: 'Latvia',
        Dial_Code: '+371',
        ISO_Code: 'LV'
      },
      {
        name: 'Lebanon',
        Dial_Code: '+961',
        ISO_Code: 'LB'
      },
      {
        name: 'Lesotho',
        Dial_Code: '+266',
        ISO_Code: 'LS'
      },
      {
        name: 'Liberia',
        Dial_Code: '+231',
        ISO_Code: 'LR'
      },
      {
        name: 'Libya',
        Dial_Code: '+218',
        ISO_Code: 'LY'
      },
      {
        name: 'Liechtenstein',
        Dial_Code: '+423',
        ISO_Code: 'LI'
      },
      {
        name: 'Lithuania',
        Dial_Code: '+370',
        ISO_Code: 'LT'
      },
      {
        name: 'Luxembourg',
        Dial_Code: '+352',
        ISO_Code: 'LU'
      },
      {
        name: 'Macau',
        Dial_Code: '+853',
        ISO_Code: 'MO'
      },
      {
        name: 'Madagascar',
        Dial_Code: '+261',
        ISO_Code: 'MG'
      },
      {
        name: 'Malawi',
        Dial_Code: '+265',
        ISO_Code: 'MW'
      },
      {
        name: 'Malaysia',
        Dial_Code: '+60',
        ISO_Code: 'MY'
      },
      {
        name: 'Maldives',
        Dial_Code: '+960',
        ISO_Code: 'MV'
      },
      {
        name: 'Mali',
        Dial_Code: '+223',
        ISO_Code: 'ML'
      },
      {
        name: 'Malta',
        Dial_Code: '+356',
        ISO_Code: 'MT'
      },
      {
        name: 'Marshall Islands',
        Dial_Code: '+692',
        ISO_Code: 'MH'
      },
      {
        name: 'Martinique',
        Dial_Code: '+596',
        ISO_Code: 'MQ'
      },
      {
        name: 'Mauritania',
        Dial_Code: '+222',
        ISO_Code: 'MR'
      },
      {
        name: 'Mauritius',
        Dial_Code: '+230',
        ISO_Code: 'MU'
      },
      {
        name: 'Mayotte',
        Dial_Code: '+262',
        ISO_Code: 'YT'
      },
      {
        name: 'Mexico',
        Dial_Code: '+52',
        ISO_Code: 'MX'
      },
      {
        name: 'Micronesia, Federated States of Micronesia',
        Dial_Code: '+691',
        ISO_Code: 'FM'
      },
      {
        name: 'Moldova',
        Dial_Code: '+373',
        ISO_Code: 'MD'
      },
      {
        name: 'Monaco',
        Dial_Code: '+377',
        ISO_Code: 'MC'
      },
      {
        name: 'Mongolia',
        Dial_Code: '+976',
        ISO_Code: 'MN'
      },
      {
        name: 'Montenegro',
        Dial_Code: '+382',
        ISO_Code: 'ME'
      },
      {
        name: 'Montserrat',
        Dial_Code: '+1664',
        ISO_Code: 'MS'
      },
      {
        name: 'Morocco',
        Dial_Code: '+212',
        ISO_Code: 'MA'
      },
      {
        name: 'Mozambique',
        Dial_Code: '+258',
        ISO_Code: 'MZ'
      },
      {
        name: 'Myanmar',
        Dial_Code: '+95',
        ISO_Code: 'MM'
      },
      {
        name: 'Namibia',
        Dial_Code: '+264',
        ISO_Code: 'NA'
      },
      {
        name: 'Nauru',
        Dial_Code: '+674',
        ISO_Code: 'NR'
      },
      {
        name: 'Nepal',
        Dial_Code: '+977',
        ISO_Code: 'NP'
      },
      {
        name: 'Netherlands',
        Dial_Code: '+31',
        ISO_Code: 'NL'
      },
      {
        name: 'Netherlands Antilles',
        Dial_Code: '+599',
        ISO_Code: 'AN'
      },
      {
        name: 'New Caledonia',
        Dial_Code: '+687',
        ISO_Code: 'NC'
      },
      {
        name: 'New Zealand',
        Dial_Code: '+64',
        ISO_Code: 'NZ'
      },
      {
        name: 'Nicaragua',
        Dial_Code: '+505',
        ISO_Code: 'NI'
      },
      {
        name: 'Niger',
        Dial_Code: '+227',
        ISO_Code: 'NE'
      },
      {
        name: 'Nigeria',
        Dial_Code: '+234',
        ISO_Code: 'NG'
      },
      {
        name: 'Niue',
        Dial_Code: '+683',
        ISO_Code: 'NU'
      },
      {
        name: 'Norfolk Island',
        Dial_Code: '+672',
        ISO_Code: 'NF'
      },
      {
        name: 'North Macedonia',
        Dial_Code: '+389',
        ISO_Code: 'MK'
      },
      {
        name: 'Northern Mariana Islands',
        Dial_Code: '+1670',
        ISO_Code: 'MP'
      },
      {
        name: 'Norway',
        Dial_Code: '+47',
        ISO_Code: 'NO'
      },
      {
        name: 'Oman',
        Dial_Code: '+968',
        ISO_Code: 'OM'
      },
      {
        name: 'Pakistan',
        Dial_Code: '+92',
        ISO_Code: 'PK'
      },
      {
        name: 'Palau',
        Dial_Code: '+680',
        ISO_Code: 'PW'
      },
      {
        name: 'Palestine',
        Dial_Code: '+970',
        ISO_Code: 'PS'
      },
      {
        name: 'Panama',
        Dial_Code: '+507',
        ISO_Code: 'PA'
      },
      {
        name: 'Papua New Guinea',
        Dial_Code: '+675',
        ISO_Code: 'PG'
      },
      {
        name: 'Paraguay',
        Dial_Code: '+595',
        ISO_Code: 'PY'
      },
      {
        name: 'Peru',
        Dial_Code: '+51',
        ISO_Code: 'PE'
      },
      {
        name: 'Philippines',
        Dial_Code: '+63',
        ISO_Code: 'PH'
      },
      {
        name: 'Pitcairn',
        Dial_Code: '+872',
        ISO_Code: 'PN'
      },
      {
        name: 'Poland',
        Dial_Code: '+48',
        ISO_Code: 'PL'
      },
      {
        name: 'Portugal',
        Dial_Code: '+351',
        ISO_Code: 'PT'
      },
      {
        name: 'Puerto Rico',
        Dial_Code: '+1939',
        ISO_Code: 'PR'
      },
      {
        name: 'Qatar',
        Dial_Code: '+974',
        ISO_Code: 'QA'
      },
      {
        name: 'Reunion',
        Dial_Code: '+262',
        ISO_Code: 'RE'
      },
      {
        name: 'Romania',
        Dial_Code: '+40',
        ISO_Code: 'RO'
      },
      {
        name: 'Russia',
        Dial_Code: '+7',
        ISO_Code: 'RU'
      },
      {
        name: 'Rwanda',
        Dial_Code: '+250',
        ISO_Code: 'RW'
      },
      {
        name: 'Saint Barthelemy',
        Dial_Code: '+590',
        ISO_Code: 'BL'
      },
      {
        name: 'Saint Helena, Ascension and Tristan Da Cunha',
        Dial_Code: '+290',
        ISO_Code: 'SH'
      },
      {
        name: 'Saint Kitts and Nevis',
        Dial_Code: '+1869',
        ISO_Code: 'KN'
      },
      {
        name: 'Saint Lucia',
        Dial_Code: '+1758',
        ISO_Code: 'LC'
      },
      {
        name: 'Saint Martin',
        Dial_Code: '+590',
        ISO_Code: 'MF'
      },
      {
        name: 'Saint Pierre and Miquelon',
        Dial_Code: '+508',
        ISO_Code: 'PM'
      },
      {
        name: 'Saint Vincent and the Grenadines',
        Dial_Code: '+1784',
        ISO_Code: 'VC'
      },
      {
        name: 'Samoa',
        Dial_Code: '+685',
        ISO_Code: 'WS'
      },
      {
        name: 'San Marino',
        Dial_Code: '+378',
        ISO_Code: 'SM'
      },
      {
        name: 'Sao Tome and Principe',
        Dial_Code: '+239',
        ISO_Code: 'ST'
      },
      {
        name: 'Saudi Arabia',
        Dial_Code: '+966',
        ISO_Code: 'SA'
      },
      {
        name: 'Senegal',
        Dial_Code: '+221',
        ISO_Code: 'SN'
      },
      {
        name: 'Serbia',
        Dial_Code: '+381',
        ISO_Code: 'RS'
      },
      {
        name: 'Seychelles',
        Dial_Code: '+248',
        ISO_Code: 'SC'
      },
      {
        name: 'Sierra Leone',
        Dial_Code: '+232',
        ISO_Code: 'SL'
      },
      {
        name: 'Singapore',
        Dial_Code: '+65',
        ISO_Code: 'SG'
      },
      {
        name: 'Sint Maarten',
        Dial_Code: '+1721',
        ISO_Code: 'SX'
      },
      {
        name: 'Slovakia',
        Dial_Code: '+421',
        ISO_Code: 'SK'
      },
      {
        name: 'Slovenia',
        Dial_Code: '+386',
        ISO_Code: 'SI'
      },
      {
        name: 'Solomon Islands',
        Dial_Code: '+677',
        ISO_Code: 'SB'
      },
      {
        name: 'Somalia',
        Dial_Code: '+252',
        ISO_Code: 'SO'
      },
      {
        name: 'South Africa',
        Dial_Code: '+27',
        ISO_Code: 'ZA'
      },
      {
        name: 'South Georgia and the South Sandwich Islands',
        Dial_Code: '+500',
        ISO_Code: 'GS'
      },
      {
        name: 'South Sudan',
        Dial_Code: '+211',
        ISO_Code: 'SS'
      },
      {
        name: 'Spain',
        Dial_Code: '+34',
        ISO_Code: 'ES'
      },
      {
        name: 'Sri Lanka',
        Dial_Code: '+94',
        ISO_Code: 'LK'
      },
      {
        name: 'Sudan',
        Dial_Code: '+249',
        ISO_Code: 'SD'
      },
      {
        name: 'Suriname',
        Dial_Code: '+597',
        ISO_Code: 'SR'
      },
      {
        name: 'Svalbard and Jan Mayen',
        Dial_Code: '+47',
        ISO_Code: 'SJ'
      },
      {
        name: 'Sweden',
        Dial_Code: '+46',
        ISO_Code: 'SE'
      },
      {
        name: 'Switzerland',
        Dial_Code: '+41',
        ISO_Code: 'CH'
      },
      {
        name: 'Syrian Arab Republic',
        Dial_Code: '+963',
        ISO_Code: 'SY'
      },
      {
        name: 'Taiwan',
        Dial_Code: '+886',
        ISO_Code: 'TW'
      },
      {
        name: 'Tajikistan',
        Dial_Code: '+992',
        ISO_Code: 'TJ'
      },
      {
        name: 'Tanzania, United Republic of Tanzania',
        Dial_Code: '+255',
        ISO_Code: 'TZ'
      },
      {
        name: 'Thailand',
        Dial_Code: '+66',
        ISO_Code: 'TH'
      },
      {
        name: 'Timor-Leste',
        Dial_Code: '+670',
        ISO_Code: 'TL'
      },
      {
        name: 'Togo',
        Dial_Code: '+228',
        ISO_Code: 'TG'
      },
      {
        name: 'Tokelau',
        Dial_Code: '+690',
        ISO_Code: 'TK'
      },
      {
        name: 'Tonga',
        Dial_Code: '+676',
        ISO_Code: 'TO'
      },
      {
        name: 'Trinidad and Tobago',
        Dial_Code: '+1868',
        ISO_Code: 'TT'
      },
      {
        name: 'Tunisia',
        Dial_Code: '+216',
        ISO_Code: 'TN'
      },
      {
        name: 'Turkey',
        Dial_Code: '+90',
        ISO_Code: 'TR'
      },
      {
        name: 'Turkmenistan',
        Dial_Code: '+993',
        ISO_Code: 'TM'
      },
      {
        name: 'Turks and Caicos Islands',
        Dial_Code: '+1649',
        ISO_Code: 'TC'
      },
      {
        name: 'Tuvalu',
        Dial_Code: '+688',
        ISO_Code: 'TV'
      },
      {
        name: 'Uganda',
        Dial_Code: '+256',
        ISO_Code: 'UG'
      },
      {
        name: 'Ukraine',
        Dial_Code: '+380',
        ISO_Code: 'UA'
      },
      {
        name: 'United Arab Emirates',
        Dial_Code: '+971',
        ISO_Code: 'AE'
      },
      {
        name: 'United Kingdom',
        Dial_Code: '+44',
        ISO_Code: 'GB'
      },
      {
        name: 'United States',
        Dial_Code: '+1',
        ISO_Code: 'US'
      },
      {
        name: 'Uruguay',
        Dial_Code: '+598',
        ISO_Code: 'UY'
      },
      {
        name: 'Uzbekistan',
        Dial_Code: '+998',
        ISO_Code: 'UZ'
      },
      {
        name: 'Vanuatu',
        Dial_Code: '+678',
        ISO_Code: 'VU'
      },
      {
        name: 'Venezuela, Bolivarian Republic of Venezuela',
        Dial_Code: '+58',
        ISO_Code: 'VE'
      },
      {
        name: 'Vietnam',
        Dial_Code: '+84',
        ISO_Code: 'VN'
      },
      {
        name: 'Virgin Islands, British',
        Dial_Code: '+1284',
        ISO_Code: 'VG'
      },
      {
        name: 'Virgin Islands, U.S.',
        Dial_Code: '+1340',
        ISO_Code: 'VI'
      },
      {
        name: 'Wallis and Futuna',
        Dial_Code: '+681',
        ISO_Code: 'WF'
      },
      {
        name: 'Yemen',
        Dial_Code: '+967',
        ISO_Code: 'YE'
      },
      {
        name: 'Zambia',
        Dial_Code: '+260',
        ISO_Code: 'ZM'
      },
      {
        name: 'Zimbabwe',
        Dial_Code: '+263',
        ISO_Code: 'ZW'
      }
    ];

  }
}
