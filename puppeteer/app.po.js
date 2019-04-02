/**
 * App page object.
 */
class AppPage {
  navigateTo() {
    return page.goto(global.BASE_URL + '/');
  }

  getTitle() {
    return page.$eval('app-root ion-title', element => element.textContent);
  }
}

module.exports = { AppPage };
