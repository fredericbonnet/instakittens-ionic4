import { Given } from 'cucumber';
const { useRole } = require('../support/roles');

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
  await useRole('anonymous');
});

Given('I am identified', async function() {
  await useRole(this.role);
});
