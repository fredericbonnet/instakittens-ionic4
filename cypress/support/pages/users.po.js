/// <reference types="Cypress" />

/**
 * Users page object.
 */
export class UsersPage {
  navigateTo() {
    return cy.visit('/users');
  }

  isActive() {
    return cy.location().then(location => {
      return location.pathname === '/users';
    });
  }
}
