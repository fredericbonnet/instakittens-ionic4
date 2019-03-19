import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from '../../testing/utils.spec';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let usersLinkDE: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage, RouterLinkDirectiveStub],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    usersLinkDE = fixture.debugElement.query(
      By.css('[data-testid="users-link"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to Users', () => {
    expect(usersLinkDE).toBeDefined();
    const routerLink = usersLinkDE.injector.get(RouterLinkDirectiveStub);
    expect(routerLink.linkParams).toEqual(['/users']);
  });
});
