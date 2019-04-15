const { LoginPage } = require('../pages/login.po');

const loginPage = new LoginPage();

const testAccounts = require('../data/test-accounts.json');

/**
 * Use an account of the given role.
 *
 * @param role Account role (e.g. admin, user)
 */
async function useRole(role) {
  const account = testAccounts.find(account => account.role === role);
  await loginPage.navigateTo();
  await loginPage.login(account.username, account.password);
}

module.exports = { useRole };
