import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;
  let routerSpy;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.events = EMPTY;

    // Local storage mock.
    let localStorageStore = {};
    spyOn(localStorage, 'getItem').and.callFake(key => {
      return localStorageStore[key] || null;
    });
    spyOn(localStorage, 'removeItem').and.callFake(key => {
      delete localStorageStore[key];
    });
    spyOn(localStorage, 'setItem').and.callFake((key, value) => {
      return (localStorageStore[key] = value);
    });
    spyOn(localStorage, 'clear').and.callFake(() => {
      localStorageStore = {};
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: Router, useValue: routerSpy }],
    });

    service = TestBed.get(AuthService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store authentication data in local storage', () => {
    const authData = 'auth data';
    expect(service.loadAuthData()).toBeNull();
    expect(localStorage.getItem).toHaveBeenCalled();
    service.storeAuthData(authData);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(service.loadAuthData()).toEqual(authData);
    service.clearAuthData();
    expect(localStorage.removeItem).toHaveBeenCalled();
    expect(service.loadAuthData()).toBeNull();
  });

  it('should call authentication service when given credentials', () => {
    const username = 'testuser';
    const password = 'testpassord';
    const authData = 'authdata';

    service.auth(username, password).subscribe(data => {
      expect(data).toEqual(authData);
    });

    // HTTP expectations.
    const req = httpTestingController.expectOne(`${environment.apiUrl}/auth`);
    expect(req.request.method).toEqual('GET');

    // Trigger response.
    req.flush(authData);
  });

  it('should store credentials upon successful authentication', done => {
    const username = 'testuser';
    const password = 'testpassord';
    const authData = 'authdata';

    expect(service.loadAuthData()).toBeNull();
    service.auth(username, password).subscribe(data => {
      expect(service.loadAuthData()).not.toBeNull();
      done();
    });
    expect(service.loadAuthData()).not.toBeNull();

    // HTTP expectations.
    const req = httpTestingController.expectOne(`${environment.apiUrl}/auth`);
    expect(req.request.method).toEqual('GET');

    // Trigger response.
    req.flush(authData);
  });

  it('should clear credentials upon authentication failure', done => {
    const username = 'testuser';
    const password = 'testpassord';

    expect(service.loadAuthData()).toBeNull();
    service.auth(username, password).subscribe(
      data => {
        fail('authentication request should have failed');
      },
      err => {
        expect(service.loadAuthData()).toBeNull();
        done();
      }
    );
    expect(service.loadAuthData()).not.toBeNull();

    // HTTP expectations.
    const req = httpTestingController.expectOne(`${environment.apiUrl}/auth`);
    expect(req.request.method).toEqual('GET');

    // Trigger error.
    req.error(new ErrorEvent('Unknown error'));
  });
});
