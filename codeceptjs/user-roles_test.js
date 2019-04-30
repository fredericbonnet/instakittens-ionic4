/// <reference path="./steps.d.ts" />

Feature('User Roles');

Scenario('admin', (useRole, usersPage) => {
  useRole('admin');
  usersPage.navigateTo();
  usersPage.waitActive();
});

Scenario('user', (useRole, usersPage) => {
  useRole('user');
  usersPage.navigateTo();
  usersPage.waitActive();
});

Scenario('admin 2', (useRole, usersPage) => {
  useRole('admin');
  usersPage.navigateTo();
  usersPage.waitActive();
});

Scenario('unknown', (useRole, usersPage, loginPage) => {
  useRole('unknown');
  usersPage.navigateTo();
  loginPage.waitActive();
});

Scenario('anonymous', (useRole, usersPage, loginPage) => {
  useRole('anonymous');
  usersPage.navigateTo();
  loginPage.waitActive();
});
