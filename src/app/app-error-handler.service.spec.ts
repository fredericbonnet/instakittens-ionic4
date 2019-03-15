import { TestBed } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';

import { AppErrorHandlerService } from './app-error-handler.service';
import { AuthService } from './auth/auth.service';
import { LoginRequiredError } from './auth/errors';

describe('AppErrorHandlerService', () => {
  let service: AppErrorHandlerService;
  let authServiceSpy, toastControllerSpy;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['openLoginPage']);
    toastControllerSpy = jasmine.createSpyObj('ToastController', ['create']);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: ToastController, useValue: toastControllerSpy },
      ],
    });

    service = TestBed.get(AppErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should display errors messages in a toast', async () => {
    const message = 'error message';
    const toast = jasmine.createSpyObj('toast', ['present']);
    toastControllerSpy.create.and.returnValue(Promise.resolve(toast));

    await service.handleError(message);
    await service.handleError(new Error(message));
    await service.handleError({ rejection: new Error(message) });

    // Expectations.
    expect(authServiceSpy.openLoginPage).not.toHaveBeenCalled();
    expect(toastControllerSpy.create).toHaveBeenCalledTimes(3);
    expect(toast.present).toHaveBeenCalledTimes(3);
    for (let i = 0; i < 3; i++) {
      expect(toastControllerSpy.create.calls.argsFor(i)[0].message).toEqual(
        message
      );
    }
  });

  it('should redirect to login page upon LoginRequiredError', async () => {
    const error = new LoginRequiredError('error message');

    await service.handleError({ rejection: error });

    // Expectations.
    expect(authServiceSpy.openLoginPage).toHaveBeenCalled();
    expect(toastControllerSpy.create).not.toHaveBeenCalled();
  });
});
