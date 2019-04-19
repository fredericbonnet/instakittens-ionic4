import { browser, by, element } from 'protractor';

/**
 * Login page object.
 */
export class LoginPage {
  async navigateTo() {
    return browser.get('/login');
  }

  async isActive() {
    return new URL(await browser.getCurrentUrl()).pathname === '/login';
  }
  async waitActive() {
    return browser.wait(async () => await this.isActive(), 5000);
  }
  async waitInactive() {
    return browser.wait(async () => !(await this.isActive()), 5000);
  }

  getLoginForm() {
    return element(by.css('[data-testid="login-form"]'));
  }
  getUsernameInput() {
    return element(by.css('[data-testid="username-input"] input'));
  }
  getPasswordInput() {
    return element(by.css('[data-testid="password-input"] input'));
  }
  getSigninButton() {
    return element(by.css('[data-testid="signin-button"]'));
  }

  async login(username, password) {
    this.getUsernameInput().sendKeys(username);
    this.getPasswordInput().sendKeys(password);
    return this.getSigninButton().click();
  }
}
