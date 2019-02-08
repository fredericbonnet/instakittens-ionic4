import { TestBed } from '@angular/core/testing';

import { AuthBasicInterceptor } from './auth-basic.interceptor';
import { AuthService } from './auth.service';

describe('AuthBasicInterceptor', () => {
  let authServiceSpy;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['loadAuthData']);
    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    });
  });

  it('should be created', () => {
    const interceptor: AuthBasicInterceptor = TestBed.get(AuthBasicInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
