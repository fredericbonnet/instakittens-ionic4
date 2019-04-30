import { UsersPage } from './pages/users.po';
import { LoginPage } from './pages/login.po';
import {
  adminRole,
  userRole,
  unknownRole,
  anonymousRole,
} from './support/roles';

const usersPage = new UsersPage();
const loginPage = new LoginPage();

fixture('User Roles').page(global.BASE_URL);

test('admin', async t => {
  await t.useRole(adminRole);
  await usersPage.navigateTo();
  await usersPage.waitActive();
});

test('user', async t => {
  await t.useRole(userRole);
  await usersPage.navigateTo();
  await usersPage.waitActive();
});

test('admin 2', async t => {
  await t.useRole(adminRole);
  await usersPage.navigateTo();
  await usersPage.waitActive();
});

test('unknown', async t => {
  await t.useRole(unknownRole);
  await usersPage.navigateTo();
  await loginPage.waitActive();
});

test('anonymous', async t => {
  await t.useRole(anonymousRole);
  await usersPage.navigateTo();
  await loginPage.waitActive();
});
