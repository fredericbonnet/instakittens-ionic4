import { TestBed } from '@angular/core/testing';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthErrorInterceptor } from './auth-error.interceptor';
import { LoginRequiredError, AccessDeniedError } from './errors';

describe('AuthErrorInterceptor', () => {
  let interceptor: AuthErrorInterceptor;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthErrorInterceptor,
          multi: true,
        },
      ],
    });

    interceptor = TestBed.get(AuthErrorInterceptor);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should rethrow 401 errors as LoginRequiredError', () => {
    const message = 'error message';

    // Build request.
    httpClient.get('/data').subscribe(
      data => fail('should have failed with LoginRequiredError'),
      err => {
        expect(err instanceof LoginRequiredError).toBeTruthy();
        expect(err.message).toEqual(message);
      }
    );

    // HTTP expectations.
    const req = httpTestingController.expectOne('/data');
    expect(req.request.method).toEqual('GET');

    // Trigger error.
    req.flush(message, { status: 401, statusText: message });
  });
  it('should rethrow 403 errors as AccessDeniedError', () => {
    const message = 'error message';

    // Build request.
    httpClient.get('/data').subscribe(
      data => fail('should have failed with AccessDeniedError'),
      err => {
        expect(err instanceof AccessDeniedError).toBeTruthy();
        expect(err.message).toEqual(message);
      }
    );

    // HTTP expectations.
    const req = httpTestingController.expectOne('/data');
    expect(req.request.method).toEqual('GET');

    // Trigger error.
    req.flush(message, { status: 403, statusText: message });
  });
  it('should let other errors pass through', () => {
    const message = 'error message';

    // Build request.
    httpClient.get('/data').subscribe(
      data => fail('should have failed with HttpErrorResponse'),
      err => {
        expect(err instanceof HttpErrorResponse).toBeTruthy();
        expect(err.error.message).toEqual(message);
      }
    );

    // HTTP expectations.
    const req = httpTestingController.expectOne('/data');
    expect(req.request.method).toEqual('GET');

    // Trigger error.
    req.error(new ErrorEvent('Unknown error', { message }));
  });
});
