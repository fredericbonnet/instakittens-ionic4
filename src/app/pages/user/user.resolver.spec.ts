import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserResolver } from './user.resolver';
import { UserService } from 'src/app/api/user.service';

describe('UserResolver', () => {
  let userServiceSpy;

  beforeEach(() => {
    userServiceSpy = jasmine.createSpyObj('UserService', {
      getUser: of({}),
    });
    TestBed.configureTestingModule({
      providers: [{ provide: UserService, useValue: userServiceSpy }],
    });
  });

  it('should be created', () => {
    const service: UserResolver = TestBed.get(UserResolver);
    expect(service).toBeTruthy();
  });
});
