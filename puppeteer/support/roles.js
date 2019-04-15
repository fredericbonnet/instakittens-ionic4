const { LoginPage } = require('../pages/login.po');

const loginPage = new LoginPage();

const testAccounts = require('../data/test-accounts.json');

/** Local storage key for authentication data */
const AUTHDATA_KEY = 'instakittens-auth-data';

/** Role data store (persists between tests) */
const roles = {};

/**
 * Use an account of the given role.
 *
 * @param role Account role (e.g. admin, user)
 */
async function useRole(role) {
  if (roles[role]) {
    // Restore auth data.
    await page.goto(global.BASE_URL);
    await page.evaluate(
      (key, data) => localStorage.setItem(key, data),
      AUTHDATA_KEY,
      roles[role]
    );
  } else {
    // Login and store auth data.
    const account = testAccounts.find(account => account.role === role);
    await loginPage.navigateTo();
    await loginPage.login(account.username, account.password);
    roles[role] = await page.evaluate(
      key => localStorage.getItem(key),
      AUTHDATA_KEY
    );
  }
}

module.exports = { useRole };
