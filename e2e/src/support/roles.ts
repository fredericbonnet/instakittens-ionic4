import { LoginPage } from '../pages/login.po';

const loginPage = new LoginPage();

const testAccounts = require('../../data/test-accounts.json');

/**
 * Use an account of the given role.
 *
 * @param role Account role (e.g. admin, user)
 */
export function useRole(role) {
  const account = testAccounts.find(account => account.role === role);
  loginPage.navigateTo();
  loginPage.login(account.username, account.password);
}
