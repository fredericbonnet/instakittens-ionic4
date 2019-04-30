import { browser } from 'protractor';
import { LoginPage } from '../pages/login.po';

const loginPage = new LoginPage();

const testAccounts = require('../../data/test-accounts.json');

/** Local storage key for authentication data */
const AUTHDATA_KEY = 'instakittens-auth-data';

/** Role data store (persists between tests) */
const roles = {};

/**
 * Use an account of the given role.
 *
 * @param role Account role (e.g. admin, user)
 */
export async function useRole(role) {
  if (role === 'anonymous') {
    // Clear auth data.
    await browser.get('/');
    await browser.executeScript(
      'localStorage.removeItem(arguments[0])',
      AUTHDATA_KEY
    );
  } else if (roles[role]) {
    // Restore auth data.
    await browser.get('/');
    await browser.executeScript(
      'localStorage.setItem(arguments[0], arguments[1])',
      AUTHDATA_KEY,
      roles[role]
    );
  } else {
    // Login and store auth data.
    const account = testAccounts.find(account => account.role === role);
    await loginPage.navigateTo();
    await loginPage.login(account.username, account.password);
    roles[role] = await browser.executeScript(
      'return localStorage.getItem(arguments[0])',
      AUTHDATA_KEY
    );
  }
}
