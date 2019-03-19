import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import * as faker from 'faker';

import { UserResolver } from './user.resolver';
import { UserService } from 'src/app/api/user.service';

describe('UserResolver', () => {
  let resolver: UserResolver;
  let userServiceSpy;

  beforeEach(() => {
    userServiceSpy = jasmine.createSpyObj('UserService', {
      getUser: of({}),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: UserService, useValue: userServiceSpy }],
    });

    resolver = TestBed.get(UserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should query User from route params', () => {
    // Generate random route.
    const userId = faker.random.uuid();
    const route = new ActivatedRouteSnapshot();
    route.params = { userId };

    resolver.resolve(route);
    expect(userServiceSpy.getUser).toHaveBeenCalledWith(userId);
  });
});
