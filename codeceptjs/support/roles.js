const testAccounts = require('../data/test-accounts.json');

/** Local storage key for authentication data */
const AUTHDATA_KEY = 'instakittens-auth-data';

/**
 * User role.
 *
 * This class follows the autoLogin plugin user signature.
 *
 * @param {*} role Role name
 *
 * @see https://codecept.io/plugins/#autologin
 */
function Role(role) {
  this.account = testAccounts.find(account => account.role === role);

  // Functions must be declared at the object level and not at the prototype or
  // class level, else the autoLogin plugin won't work.
  this.login = I => {
    I.login(this.account.username, this.account.password);
  };

  this.check = async I => {
    const data = await I.executeScript(
      key => localStorage.getItem(key),
      AUTHDATA_KEY
    );
    expect(JSON.parse(data)).to.have.property(
      'username',
      this.account.username
    );
  };

  this.fetch = I => {
    I.amOnPage('/');
    return I.executeScript(key => localStorage.getItem(key), AUTHDATA_KEY);
  };

  this.restore = (I, data) => {
    I.amOnPage('/');
    I.executeScript(
      (key, data) => localStorage.setItem(key, data),
      AUTHDATA_KEY,
      data
    );
  };
}

/**
 * Anonymous role.
 *
 * This class follows the autoLogin plugin user signature.
 *
 * @see https://codecept.io/plugins/#autologin
 */
function AnonymousRole(role) {
  // Functions must be declared at the object level and not at the prototype or
  // class level, else the autoLogin plugin won't work.
  this.login = I => {};

  this.check = async I => {
    const data = await I.executeScript(
      key => localStorage.getItem(key),
      AUTHDATA_KEY
    );
    expect(data).to.equal(null);
  };

  this.fetch = I => {};

  this.restore = (I, data) => {
    I.amOnPage('/');
    I.executeScript(key => localStorage.clearItem(key), AUTHDATA_KEY);
  };
}

/** Users for the autoLogin plugin */
const users = {
  admin: new Role('admin'),
  user: new Role('user'),
  unknown: new Role('unknown'),
  anonymous: new AnonymousRole(),
};

module.exports = { users };
