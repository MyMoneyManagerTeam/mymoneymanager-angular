import { TestBed } from '@angular/core/testing';

import { JwtInterceptor } from './jwt.interceptor';

// @ts-ignore
describe('JwtInterceptor', () => {
  // @ts-ignore
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtInterceptor
      ]
  }));

  // @ts-ignore
  it('should be created', () => {
    const interceptor: JwtInterceptor = TestBed.inject(JwtInterceptor);
    // @ts-ignore
    expect(interceptor).toBeTruthy();
  });
});
