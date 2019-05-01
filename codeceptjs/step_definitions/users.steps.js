/// <reference path="../steps.d.ts" />

const { I, usersPage } = inject();

Given('I go to the Users Page', () => {
  usersPage.navigateTo();
});

Then('I should see the User List', () => {
  I.seeElement(usersPage.getUserList());
});
