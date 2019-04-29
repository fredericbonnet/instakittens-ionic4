/// <reference types="Cypress" />

import { LoginPage } from '../support/pages/login.po';

const loginPage = new LoginPage();

/** Local storage key for authentication data */
const AUTHDATA_KEY = 'instakittens-auth-data';

/** Role data store (persists between tests) */
const roles = {};

/**
 * Use an account of the given role.
 *
 * @param role Account role (e.g. admin, user)
 */
Cypress.Commands.add('useRole', role => {
  if (role === 'anonymous') {
    // Clear auth data.
    localStorage.removeItem(AUTHDATA_KEY);
  } else if (roles[role]) {
    // Restore auth data.
    localStorage.setItem(AUTHDATA_KEY, roles[role]);
  } else {
    // Login and store auth data.
    cy.fixture('test-accounts.json').then(testAccounts => {
      const account = testAccounts.find(account => account.role === role);
      loginPage.navigateTo();
      loginPage.login(account.username, account.password).then(() => {
        roles[role] = localStorage.getItem(AUTHDATA_KEY);
      });
    });
  }
});
