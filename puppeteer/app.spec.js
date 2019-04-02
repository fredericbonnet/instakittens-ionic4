const { AppPage } = require('./app.po');
const { HomePage } = require('./home.po');

describe('App', () => {
  let page;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the app name', async () => {
    await page.navigateTo();
    expect(await page.getTitle()).to.eql('Instakittens');
  });

  it('should redirect to the home page', async () => {
    await page.navigateTo();
    const homePage = new HomePage();
    expect(await homePage.isActive()).to.be.true;
  });
});
