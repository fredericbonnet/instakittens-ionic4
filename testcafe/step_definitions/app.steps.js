const { Before, Then } = require('cucumber');
const { AppPage } = require('../pages/app.po');

Before(function() {
  this.appPage = new AppPage(this.t);
});

Then('I should see a Warning Message', async function() {
  await this.t.expect(this.appPage.getErrorMessage().exists).ok();
});
Then('I should not see a Warning Message', async function() {
  await this.t.expect(this.appPage.getErrorMessage().exists).notOk();
});
