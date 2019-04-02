/**
 * Home page object.
 */
class HomePage {
  navigateTo() {
    return page.goto(global.BASE_URL + '/home');
  }

  async isActive() {
    return (await page.evaluate(() => window.location.pathname)) === '/home';
  }

  getUsersLink() {
    return page.$('[data-testid="users-link"]');
  }
}

module.exports = { HomePage };
