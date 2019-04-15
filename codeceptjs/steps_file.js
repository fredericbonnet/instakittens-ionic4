// in this file you can append custom step methods to 'I' object
const loginPage = require('./pages/login.po');

module.exports = function() {
  return actor({
    /**
     * Login with given credendials.
     *
     * @param username Username
     * @param password Password
     */
    login: function(username, password) {
      loginPage.navigateTo();
      loginPage.login(username, password);
    },
  });
};
