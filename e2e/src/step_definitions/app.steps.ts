import { Then } from 'cucumber';
import { AppPage } from '../pages/app.po';

const appPage: AppPage = new AppPage();

Then('I should see a Warning Message', async function() {
  await appPage.waitErrorMessageVisible();
});
Then('I should not see a Warning Message', async function() {
  await appPage.waitErrorMessageNotVisible();
});
