import { browser, by, element } from 'protractor';

/**
 * App page object.
 */
export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.deepCss('app-root ion-title')).getText();
  }
}
