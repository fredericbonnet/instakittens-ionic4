/// <reference path="./steps.d.ts" />

Feature('App');

Scenario('should display the app name', async appPage => {
  appPage.navigateTo();
  expect(await appPage.getTitle()).to.eql('Instakittens');
});

Scenario('should redirect to the home page', async (appPage, homePage) => {
  appPage.navigateTo();
  expect(await homePage.isActive()).to.be.true;
});
