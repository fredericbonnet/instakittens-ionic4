/**
 * Login page object.
 */
class LoginPage {
  async navigateTo() {
    return page.goto(global.BASE_URL + '/login');
  }

  async isActive() {
    return (await page.evaluate(() => window.location.pathname)) === '/login';
  }
  async waitActive() {
    return page.waitForSelector('app-login ion-content', {
      visibility: 'visible',
    });
  }
  async waitInactive() {
    return page.waitForSelector('app-login ion-content', {
      visibility: 'hidden',
    });
  }

  async getLoginForm() {
    return page.$('[data-testid="login-form"]');
  }
  async getUsernameInput() {
    return page.$('[data-testid="username-input"] input');
  }
  async getPasswordInput() {
    return page.$('[data-testid="password-input"] input');
  }
  async getSigninButton() {
    return page.$('[data-testid="signin-button"]');
  }

  async login(username, password) {
    await (await this.getUsernameInput()).type(username);
    await (await this.getPasswordInput()).type(password);
    await (await this.getSigninButton()).click();
  }
}

module.exports = { LoginPage };
