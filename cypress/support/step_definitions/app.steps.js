/* global Then */

import { AppPage } from '../pages/app.po';

const appPage = new AppPage();

Then('I should see a Warning Message', () => {
  appPage.waitErrorMessageVisible();
});
Then('I should not see a Warning Message', () => {
  appPage.waitErrorMessageNotVisible();
});
