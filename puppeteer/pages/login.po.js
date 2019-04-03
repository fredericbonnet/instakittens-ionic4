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

  async getUsernameInput() {
    return page.$('[data-testid="username-input"]');
  }
  async getPasswordInput() {
    return page.$('[data-testid="password-input"]');
  }
  async getSigninButton() {
    return page.$('[data-testid="signin-button"]');
  }
}

module.exports = { LoginPage };
