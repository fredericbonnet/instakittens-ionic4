import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing/utils.spec';
import { of } from 'rxjs';
import * as faker from 'faker';

import { UsersPage } from './users.page';
import { User } from '../../api/user.model';
import { fakeUser } from '../../api/user.model.spec';

const routes: Routes = [
  {
    path: 'users',
    component: UsersPage,
  },
];

describe('UsersPage', () => {
  let users: User[];
  let component: UsersPage;
  let fixture: ComponentFixture<UsersPage>;
  let userListDE: DebugElement;
  let userLabelsDE: DebugElement[];
  let userLinksDE: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersPage, RouterLinkDirectiveStub],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Generate random user list and pass as route data.
    const nb = faker.random.number(50);
    users = [];
    for (let i = 0; i < nb; i++) {
      users.push(fakeUser());
    }
    const route = TestBed.get(ActivatedRoute);
    route.data = of({ users });

    fixture = TestBed.createComponent(UsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userListDE = fixture.debugElement.query(
      By.css('[data-testid="user-list"]')
    );
    userLabelsDE = fixture.debugElement.queryAll(
      By.css('[data-testid="user-label"]')
    );
    userLinksDE = fixture.debugElement.queryAll(
      By.css('[data-testid="user-link"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a User list', () => {
    expect(userListDE).toBeDefined();
    expect(userLabelsDE.length).toEqual(users.length);
    for (let i = 0; i < users.length; i++) {
      const user: User = users[i];
      const userLabelDE: DebugElement = userLabelsDE[i];
      expect(userLabelDE.nativeElement.textContent).toEqual(user.username);
    }
  });

  it('should have links to all Users', () => {
    expect(userLinksDE.length).toEqual(users.length);
    for (let i = 0; i < users.length; i++) {
      const user: User = users[i];
      const userLinkDE: DebugElement = userLinksDE[i];
      const routerLink = userLinkDE.injector.get(RouterLinkDirectiveStub);
      expect(routerLink.linkParams).toEqual(['/users', user.id]);
    }
  });
});
