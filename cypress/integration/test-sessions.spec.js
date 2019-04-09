/// <reference types="Cypress" />

import { UsersPage } from '../support/pages/users.po';
import { LoginPage } from '../support/pages/login.po';

describe('Test Sessions', () => {
  const usersPage = new UsersPage();
  const loginPage = new LoginPage();

  it('should not persist between runs', () => {
    cy.fixture('test-accounts.json').then(testAccounts => {
      usersPage.navigateTo();
      loginPage.waitActive();

      const account = testAccounts.find(account => account.role === 'admin');
      loginPage.login(account.username, account.password);
      loginPage.waitInactive();
    });
  });

  it('should not persist between tests', () => {
    usersPage.navigateTo();
    loginPage.waitActive();
  });
});
