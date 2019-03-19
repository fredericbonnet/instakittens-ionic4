import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing/utils.spec';
import { of } from 'rxjs';

import { UserPage } from './user.page';
import { User } from '../../api/user.model';
import { fakeUser } from '../../api/user.model.spec';

const routes: Routes = [
  {
    path: 'users/:userId',
    component: UserPage,
  },
];

describe('UserPage', () => {
  let userId;
  let user: User;
  let component: UserPage;
  let fixture: ComponentFixture<UserPage>;
  let userLabelDE: DebugElement;
  let albumsLinkDE: DebugElement;
  let commentsLinkDE: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserPage, RouterLinkDirectiveStub],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  }));

  beforeEach(() => {
    // Generate random user and pass as route data.
    user = fakeUser();
    userId = user.id;
    const route = TestBed.get(ActivatedRoute);
    route.snapshot.params = { userId };
    route.data = of({ user });

    fixture = TestBed.createComponent(UserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userLabelDE = fixture.debugElement.query(
      By.css('[data-testid="user-label"]')
    );
    albumsLinkDE = fixture.debugElement.query(
      By.css('[data-testid="albums-link"]')
    );
    commentsLinkDE = fixture.debugElement.query(
      By.css('[data-testid="comments-link"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show User info', () => {
    expect(userLabelDE).toBeDefined();
  });

  it('should have a link to User Albums', () => {
    expect(albumsLinkDE).toBeDefined();
    const routerLink = albumsLinkDE.injector.get(RouterLinkDirectiveStub);
    expect(routerLink.linkParams).toEqual(['/users', userId, 'albums']);
  });

  it('should have a link to User Comments', () => {
    expect(commentsLinkDE).toBeDefined();
    const routerLink = commentsLinkDE.injector.get(RouterLinkDirectiveStub);
    expect(routerLink.linkParams).toEqual(['/users', userId, 'comments']);
  });
});
