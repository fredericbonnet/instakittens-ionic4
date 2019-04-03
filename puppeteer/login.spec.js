const { LoginPage } = require('./pages/login.po');

describe('Login Page', () => {
  const loginPage = new LoginPage();

  beforeEach(async () => {
    await loginPage.navigateTo();
  });

  it('should have a username input', async () => {
    expect(await loginPage.getUsernameInput()).to.be.ok;
  });
  it('should have a password input', async () => {
    expect(await loginPage.getPasswordInput()).to.be.ok;
  });
  it('should have a signin button', async () => {
    expect(await loginPage.getSigninButton()).to.be.ok;
  });
});
