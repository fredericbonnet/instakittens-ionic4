/* global Then */

import { AppPage } from '../pages/app.po';

const appPage = new AppPage();

Then('I should see a Warning Message', () => {
  appPage.getErrorMessage().should('be.visible');
});
Then('I should not see a Warning Message', () => {
  appPage.getErrorMessage().should('not.be.visible');
});
