import { UsersPage } from './pages/users.po';
import { LoginPage } from './pages/login.po';

const testAccounts = require('../data/test-accounts.json');

describe('Test Sessions', () => {
  const usersPage: UsersPage = new UsersPage();
  const loginPage: LoginPage = new LoginPage();

  it('should not persist between runs', () => {
    usersPage.navigateTo();
    loginPage.waitActive();

    const account = testAccounts.find(account => account.role === 'admin');
    loginPage.login(account.username, account.password);
    loginPage.waitInactive();
  });

  it('should not persist between tests', () => {
    usersPage.navigateTo();
    loginPage.waitActive();
  });
});
