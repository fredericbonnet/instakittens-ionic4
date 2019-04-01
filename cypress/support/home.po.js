/// <reference types="Cypress" />

/**
 * Home page object.
 */
export class HomePage {
  navigateTo() {
    return cy.visit('/home');
  }

  isActive() {
    return cy.location().then(location => {
      return location.pathname === '/home';
    });
  }

  getUsersLink() {
    return cy.get('[data-testid="users-link"]');
  }
}
