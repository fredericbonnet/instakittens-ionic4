/**
 * App page object.
 */
class AppPage {
  async navigateTo() {
    return page.goto(global.BASE_URL + '/');
  }

  async getTitle() {
    return page.$eval('app-root ion-title', element => element.textContent);
  }

  async getErrorMessage() {
    return page.$('ion-toast.error-message');
  }
}

module.exports = { AppPage };
