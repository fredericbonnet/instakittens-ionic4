/// <reference path="../steps.d.ts" />

const { I, appPage } = inject();

Then('I should see a Warning Message', () => {
  I.waitForVisible(appPage.getErrorMessage());
});
Then('I should not see a Warning Message', () => {
  I.waitForInvisible(appPage.getErrorMessage());
});
