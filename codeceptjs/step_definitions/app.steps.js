/// <reference path="../steps.d.ts" />

const { I, appPage } = inject();

Then('I should see a Warning Message', () => {
  appPage.waitErrorMessageVisible();
});
Then('I should not see a Warning Message', () => {
  appPage.waitErrorMessageNotVisible();
});
