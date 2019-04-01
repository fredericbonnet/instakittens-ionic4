/// <reference types="Cypress" />

import { AppPage } from '../support/app.po';
import { HomePage } from '../support/home.po';

describe('App', () => {
  let page;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the app name', () => {
    page.navigateTo();
    page.getTitle().should('eql', 'Instakittens');
  });

  it('should redirect to the home page', () => {
    page.navigateTo();
    const homePage = new HomePage();
    homePage.isActive().should('be.true');
  });
});
