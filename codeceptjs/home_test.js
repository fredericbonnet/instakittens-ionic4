/// <reference path="./steps.d.ts" />

Feature('Home Page');

Scenario('should have a link to Users', (I, homePage) => {
  homePage.navigateTo();
  I.seeElement(homePage.getUsersLink());
});
