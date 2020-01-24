/*
 * Cucumber-js profiles.
 */

const common = `
  --require support/globals.js 
  --require support/assertions.js 
  --require support/puppeteer-cucumber.js 
  --require step_definitions/**/*.steps.js
  `;

// Rerun option.
const fs = require('fs');
const rerunFile = '@rerun.txt';
let rerunOption = '';
if (fs.existsSync(rerunFile) && fs.statSync(rerunFile).size > 0) {
  // Activate rerun.
  rerunOption = rerunFile;
}

module.exports = {
  default: `${common} features/**/*.feature`,
  watch: `${common} --format rerun:${rerunFile} ${rerunOption}`,
};
