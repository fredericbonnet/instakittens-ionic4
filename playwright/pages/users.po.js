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
  async waitActive() {
    return page.waitForSelector('app-users ion-content', {
      visibility: 'visible',
    });
  }
  async waitInactive() {
    return page.waitForSelector('app-users ion-content', {
      visibility: 'hidden',
    });
  }

  async getUserList() {
    return page.$('[data-testid="user-list"]');
  }
}

module.exports = { UsersPage };
