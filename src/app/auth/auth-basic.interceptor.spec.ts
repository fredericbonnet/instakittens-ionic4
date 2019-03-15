import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthBasicInterceptor } from './auth-basic.interceptor';
import { AuthService } from './auth.service';

describe('AuthBasicInterceptor', () => {
  let interceptor: AuthBasicInterceptor;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let authServiceSpy;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['loadAuthData']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthBasicInterceptor,
          multi: true,
        },
      ],
    });

    interceptor = TestBed.get(AuthBasicInterceptor);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should not add an Authorization header when no authentication data is present', () => {
    authServiceSpy.loadAuthData.and.stub();

    // Build request.
    const testData = 'test data';
    httpClient.get('/data').subscribe(data => {
      expect(data).toEqual(testData);
    });

    // HTTP expectations.
    const req = httpTestingController.expectOne('/data');
    expect(req.request.method).toEqual('GET');
    expect(req.request.headers.has('Authorization')).toBeFalsy();

    // Trigger response.
    req.flush(testData);
  });
  it('should add an Authorization header when authentication data is present', () => {
    // Mock auth data.
    const authData = { username: 'testuser', password: 'password' };
    authServiceSpy.loadAuthData.and.returnValue(authData);

    // Build request.
    const testData = 'test data';
    httpClient.get('/data').subscribe(data => {
      expect(data).toEqual(testData);
    });

    // HTTP expectations.
    const req = httpTestingController.expectOne('/data');
    expect(req.request.method).toEqual('GET');
    expect(req.request.headers.has('Authorization')).toBeTruthy();
    const authorization =
      'Basic ' + btoa(authData.username + ':' + authData.password);
    expect(req.request.headers.get('Authorization')).toEqual(authorization);

    // Trigger response.
    req.flush(testData);
  });
});
