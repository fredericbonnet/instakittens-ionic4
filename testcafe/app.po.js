import { Selector, t } from 'testcafe';

/**
 * App page object.
 */
export class AppPage {
  navigateTo() {
    return t.navigateTo(global.BASE_URL + '/');
  }

  getTitle() {
    return Selector('app-root ion-title').textContent;
  }
}
