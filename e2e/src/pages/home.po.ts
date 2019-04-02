import { browser, by, element } from 'protractor';

/**
 * Home page object.
 */
export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  async isActive() {
    return (await browser.getCurrentUrl()).endsWith('/home');
  }

  getUsersLink() {
    return element(by.css('[data-testid="users-link"]'));
  }
}
