const { HomePage } = require('./pages/home.po');

describe('Home Page', () => {
  const homePage = new HomePage();

  it('should have a link to Users', async () => {
    await homePage.navigateTo();
    expect(await homePage.getUsersLink()).to.be.ok;
  });
});
