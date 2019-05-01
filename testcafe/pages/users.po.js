import { Selector, t } from 'testcafe';

/**
 * Users page object.
 */
export class UsersPage {
  constructor(boundTestRun) {
    this.t = boundTestRun || t;
    this.options = { boundTestRun };
  }
  async navigateTo() {
    return this.t.navigateTo(global.BASE_URL + '/users');
  }

  async isActive() {
    return (
      (await this.t.eval(() => window.location.pathname), this.options) ===
      '/users'
    );
  }
  async waitActive() {
    return this.t
      .expect(this.t.eval(() => window.location.pathname), this.options)
      .eql('/users');
  }
  async waitInactive() {
    return this.t
      .expect(this.t.eval(() => window.location.pathname), this.options)
      .notEql('/users');
  }

  getUserList() {
    return Selector('[data-testid="user-list"]').with(this.options);
  }
}
