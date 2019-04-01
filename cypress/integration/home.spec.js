/// <reference types="Cypress" />

import { HomePage } from '../support/home.po';

describe('Home Page', () => {
  let page;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should have a link to Users', () => {
    page.navigateTo();
    page.getUsersLink().should('exist');
  });
});
