import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import * as faker from 'faker';

import { UsersResolver } from './users.resolver';
import { UserService } from 'src/app/api/user.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let userServiceSpy;

  beforeEach(() => {
    userServiceSpy = jasmine.createSpyObj('UserService', {
      getUsers: of([]),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: UserService, useValue: userServiceSpy }],
    });

    resolver = TestBed.get(UsersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should query Users', () => {
    resolver.resolve();
    expect(userServiceSpy.getUsers).toHaveBeenCalled();
  });
});
