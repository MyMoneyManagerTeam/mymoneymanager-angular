import { TestBed } from '@angular/core/testing';

import { AuthentificationService } from './authentification.service';

// @ts-ignore
describe('AuthentificationService', () => {
  let service: AuthentificationService;

  // @ts-ignore
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationService);
  });

  // @ts-ignore
  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
