/**
 * Users page object.
 */
class UsersPage {
  async navigateTo() {
    return page.goto(global.BASE_URL + '/users');
  }

  async isActive() {
    return (await page.evaluate(() => window.location.pathname)) === '/users';
  }
}

module.exports = { UsersPage };
