import { browser } from 'protractor';

/**
 * Users page object.
 */
export class UsersPage {
  navigateTo() {
    return browser.get('/users');
  }

  async isActive() {
    return (await browser.getCurrentUrl()).endsWith('/users');
  }
}
