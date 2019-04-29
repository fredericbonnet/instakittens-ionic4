const { Then } = require('cucumber');
const { AppPage } = require('../pages/app.po');

const appPage = new AppPage();

Then('I should see a Warning Message', async function() {
  expect(await appPage.getErrorMessage()).to.exist;
});
Then('I should not see a Warning Message', async function() {
  expect(await appPage.getErrorMessage()).to.not.exist;
});
