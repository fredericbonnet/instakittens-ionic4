import { TestBed } from '@angular/core/testing';

import { AuthErrorInterceptor } from './auth-error.interceptor';

describe('AuthErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const interceptor: AuthErrorInterceptor = TestBed.get(AuthErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
