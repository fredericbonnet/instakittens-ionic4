const { UsersPage } = require('./pages/users.po');
const { LoginPage } = require('./pages/login.po');

const testAccounts = require('./data/test-accounts.json');

describe('Test Sessions', () => {
  const usersPage = new UsersPage();
  const loginPage = new LoginPage();

  it('should not persist between runs', async () => {
    await usersPage.navigateTo();
    await loginPage.waitActive();

    const account = testAccounts.find(account => account.role === 'admin');
    await loginPage.login(account.username, account.password);
    await loginPage.waitInactive();
  });

  it('should not persist between tests', async () => {
    await usersPage.navigateTo();
    await loginPage.waitActive();
  });
});
