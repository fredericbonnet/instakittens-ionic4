/// <reference types="Cypress" />

import { UsersPage } from '../support/pages/users.po';
import { LoginPage } from '../support/pages/login.po';

describe('User Roles', () => {
  const usersPage = new UsersPage();
  const loginPage = new LoginPage();

  it('admin', () => {
    cy.useRole('admin');
    usersPage.navigateTo();
    usersPage.waitActive();
  });

  it('user', () => {
    cy.useRole('user');
    usersPage.navigateTo();
    usersPage.waitActive();
  });

  it('admin 2', () => {
    cy.useRole('admin');
    usersPage.navigateTo();
    usersPage.waitActive();
  });

  it('unknown', () => {
    cy.useRole('unknown');
    usersPage.navigateTo();
    loginPage.waitActive();
  });

  it('anonymous', () => {
    cy.useRole('anonymous');
    usersPage.navigateTo();
    loginPage.waitActive();
  });
});
