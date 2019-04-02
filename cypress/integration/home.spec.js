/// <reference types="Cypress" />

import { HomePage } from '../support/pages/home.po';

describe('Home Page', () => {
  const homePage = new HomePage();

  it('should have a link to Users', () => {
    homePage.navigateTo();
    homePage.getUsersLink().should('exist');
  });
});
