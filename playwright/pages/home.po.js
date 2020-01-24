/**
 * Home page object.
 */
class HomePage {
  async navigateTo() {
    return page.goto(global.BASE_URL + '/home');
  }

  async isActive() {
    return (await page.evaluate(() => window.location.pathname)) === '/home';
  }

  async getUsersLink() {
    return page.$('[data-testid="users-link"]');
  }
}

module.exports = { HomePage };
