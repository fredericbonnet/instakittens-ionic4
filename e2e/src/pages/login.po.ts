import { browser, by, element } from 'protractor';

/**
 * Login page object.
 */
export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  async isActive() {
    return new URL(await browser.getCurrentUrl()).pathname === '/login';
  }

  getUsernameInput() {
    return element(by.css('[data-testid="username-input"]'));
  }
  getPasswordInput() {
    return element(by.css('[data-testid="password-input"]'));
  }
  getSigninButton() {
    return element(by.css('[data-testid="signin-button"]'));
  }
}
