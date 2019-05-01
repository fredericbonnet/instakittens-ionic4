const { Given } = require('cucumber');
const { roles } = require('../support/roles');

Given('I am an unknown user', function() {
  this.role = 'unknown';
});

Given('I am a registered user', function() {
  this.role = 'user';
});

Given('I am an administrator', function() {
  this.role = 'admin';
});

Given('I am not identified', async function() {
  delete this.role;
  await this.t.useRole(roles['anonymous']);
});

Given('I am identified', async function() {
  await this.t.useRole(roles[this.role]);
});
