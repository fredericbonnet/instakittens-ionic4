/// <reference types="Cypress" />

import { LoginPage } from '../support/pages/login.po';

const loginPage = new LoginPage();

/**
 * Use an account of the given role.
 *
 * @param role Account role (e.g. admin, user)
 */
Cypress.Commands.add('useRole', role => {
  cy.fixture('test-accounts.json').then(testAccounts => {
    const account = testAccounts.find(account => account.role === role);
    loginPage.navigateTo();
    loginPage.login(account.username, account.password);
  });
});
