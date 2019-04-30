const { Then } = require('cucumber');
const { AppPage } = require('../pages/app.po');

const appPage = new AppPage();

Then('I should see a Warning Message', async function() {
  await appPage.waitErrorMessageVisible();
});
Then('I should not see a Warning Message', async function() {
  await appPage.waitErrorMessageNotVisible();
});
