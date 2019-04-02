const { HomePage } = require('./home.po');

describe('Home Page', () => {
  let page;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should have a link to Users', async () => {
    await page.navigateTo();
    expect(await page.getUsersLink()).to.be.ok;
  });
});
