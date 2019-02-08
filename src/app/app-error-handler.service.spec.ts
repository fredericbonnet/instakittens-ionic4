import { TestBed } from '@angular/core/testing';

import { AppErrorHandlerService } from './app-error-handler.service';
import { AuthService } from './auth/auth.service';

describe('AppErrorHandlerService', () => {
  let authServiceSpy;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    });
  });

  it('should be created', () => {
    const service: AppErrorHandlerService = TestBed.get(AppErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
