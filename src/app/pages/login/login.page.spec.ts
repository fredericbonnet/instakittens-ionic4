import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute, Router } from '@angular/router';

import { LoginPage } from './login.page';
import { AuthService } from 'src/app/auth/auth.service';
import { of, throwError } from 'rxjs';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
];

describe('LoginPage', () => {
  let redirect = '/';
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let userInputDE: DebugElement;
  let passwordInputDE: DebugElement;
  let signinButtonDE: DebugElement;
  let authServiceSpy;

  beforeEach(async(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['auth']);
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    }).compileComponents();

    // Build route.
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.queryParams = { redirect };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userInputDE = fixture.debugElement.query(
      By.css('[data-testid="user-input"]')
    );
    passwordInputDE = fixture.debugElement.query(
      By.css('[data-testid="password-input"]')
    );
    signinButtonDE = fixture.debugElement.query(
      By.css('[data-testid="signin-button"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud have a username input', () => {
    expect(userInputDE).toBeDefined();
  });
  it('shoud have a password input', () => {
    expect(passwordInputDE).toBeDefined();
  });
  it('shoud have a signin button', () => {
    expect(signinButtonDE).toBeDefined();
  });

  it('should redirect to URL upon successful authentication', () => {
    const router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl').and.stub();
    authServiceSpy.auth.and.returnValue(of({}));
    component.signin();
    expect(router.navigateByUrl).toHaveBeenCalledWith(redirect, {
      replaceUrl: true,
    });
  });

  it('should throw an error upon authentication failure', () => {
    const router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl').and.stub();
    authServiceSpy.auth.and.returnValue(throwError('error'));
    expect(component.signin).toThrow();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });
});
