/// <reference types="Cypress" />

/**
 * Login page object.
 */
export class LoginPage {
  navigateTo() {
    return cy.visit('/login');
  }

  isActive() {
    return cy.location().then(location => {
      return location.pathname === '/login';
    });
  }
  waitActive() {
    return cy.location('pathname').should('eq', '/login');
  }
  waitInactive() {
    return cy.location('pathname').should('not.eq', '/login');
  }

  getUsernameInput() {
    return cy.get('[data-testid="username-input"] input');
  }
  getPasswordInput() {
    return cy.get('[data-testid="password-input"] input');
  }
  getSigninButton() {
    return cy.get('[data-testid="signin-button"]');
  }

  login(username, password) {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    return this.getSigninButton().click();
  }
}
