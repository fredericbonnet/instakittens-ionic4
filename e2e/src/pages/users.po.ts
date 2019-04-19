import { browser } from 'protractor';

/**
 * Users page object.
 */
export class UsersPage {
  async navigateTo() {
    return browser.get('/users');
  }

  async isActive() {
    return (await browser.getCurrentUrl()).endsWith('/users');
  }
  async waitActive() {
    return browser.wait(async () => await this.isActive(), 5000);
  }
  async waitInactive() {
    return browser.wait(async () => !(await this.isActive()), 5000);
  }
}
