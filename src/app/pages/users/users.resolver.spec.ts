import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UsersResolver } from './users.resolver';
import { UserService } from 'src/app/api/user.service';

describe('UsersResolver', () => {
  let userServiceSpy;

  beforeEach(() => {
    userServiceSpy = jasmine.createSpyObj('UserService', {
      getUsers: of([]),
    });
    TestBed.configureTestingModule({
      providers: [{ provide: UserService, useValue: userServiceSpy }],
    });
  });

  it('should be created', () => {
    const service: UsersResolver = TestBed.get(UsersResolver);
    expect(service).toBeTruthy();
  });
});
