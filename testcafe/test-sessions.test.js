import { UsersPage } from './pages/users.po';
import { LoginPage } from './pages/login.po';

const testAccounts = require('./data/test-accounts.json');

const usersPage = new UsersPage();
const loginPage = new LoginPage();

fixture('Test Sessions');

test('should not persist between runs', async t => {
  await usersPage.navigateTo();
  await loginPage.waitActive();

  const account = testAccounts.find(account => account.role === 'admin');
  await loginPage.login(account.username, account.password);
  await loginPage.waitInactive();
});

test('should not persist between tests', async t => {
  await usersPage.navigateTo();
  await loginPage.waitActive();
});
