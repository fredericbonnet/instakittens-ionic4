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

  getErrorMessage() {
    return cy.get('ion-toast.error-message');
  }
  waitErrorMessageVisible() {
    return this.getErrorMessage().should('be.visible');
  }
  waitErrorMessageNotVisible() {
    return this.getErrorMessage().should('not.be.visible');
  }
}
