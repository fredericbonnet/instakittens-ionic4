const { Given } = require('cucumber');

Given('I am an unknown user', function() {
  this.role = 'unknown';
});

Given('I am a registered user', function() {
  this.role = 'user';
});

Given('I am an administrator', function() {
  this.role = 'admin';
});
