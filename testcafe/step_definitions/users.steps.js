const { Before, Given, Then } = require('cucumber');
const { UsersPage } = require('../pages/users.po');

Before(function() {
  this.usersPage = new UsersPage(this.t);
});

Given('I go to the Users Page', async function() {
  await this.usersPage.navigateTo();
});

Then('I should see the User List', async function() {
  await this.t.expect(this.usersPage.getUserList().exists).ok();
});
