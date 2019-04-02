const { AppPage } = require('./pages/app.po');
const { HomePage } = require('./pages/home.po');

describe('App', () => {
  const appPage = new AppPage();
  const homePage = new HomePage();

  it('should display the app name', async () => {
    await appPage.navigateTo();
    expect(await appPage.getTitle()).to.eql('Instakittens');
  });

  it('should redirect to the home page', async () => {
    await appPage.navigateTo();
    expect(await homePage.isActive()).to.be.true;
  });
});
