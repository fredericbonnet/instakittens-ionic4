/// <reference types="Cypress" />

import { UsersPage } from '../support/pages/users.po';

describe('User Roles', () => {
  const usersPage = new UsersPage();

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
});
