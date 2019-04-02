/// <reference types="Cypress" />

import { AppPage } from '../support/pages/app.po';
import { HomePage } from '../support/pages/home.po';

describe('App', () => {
  const appPage = new AppPage();
  const homePage = new HomePage();

  it('should display the app name', () => {
    appPage.navigateTo();
    appPage.getTitle().should('eql', 'Instakittens');
  });

  it('should redirect to the home page', () => {
    appPage.navigateTo();
    homePage.isActive().should('be.true');
  });
});
