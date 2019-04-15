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
    return page.waitForSelector('app-users ion-content', { visible: true });
  }
  async waitInactive() {
    return page.waitForSelector('app-users ion-content', { hidden: true });
  }
}

module.exports = { UsersPage };
