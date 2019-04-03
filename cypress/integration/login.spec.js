/// <reference types="Cypress" />

import { LoginPage } from '../support/pages/login.po';

describe('Login Page', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.navigateTo();
  });

  it('should have a username input', () => {
    loginPage.getUsernameInput().should('exist');
  });
  it('should have a password input', () => {
    loginPage.getPasswordInput().should('exist');
  });
  it('should have a signin button', () => {
    loginPage.getSigninButton().should('exist');
  });
});
