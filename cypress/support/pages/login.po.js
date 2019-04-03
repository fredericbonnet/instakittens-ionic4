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

  getUsernameInput() {
    return cy.get('[data-testid="username-input"]');
  }
  getPasswordInput() {
    return cy.get('[data-testid="password-input"]');
  }
  getSigninButton() {
    return cy.get('[data-testid="signin-button"]');
  }
}
