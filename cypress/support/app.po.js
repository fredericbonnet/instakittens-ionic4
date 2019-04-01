/// <reference types="Cypress" />

/**
 * App page object.
 */
export class AppPage {
  navigateTo() {
    return cy.visit('/');
  }

  getTitle() {
    return cy.get('app-root ion-title').then(el => el.text());
  }
}
