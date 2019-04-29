/* global Given */

Given('I am an unknown user', () => {
  cy.getWorld().then(world => {
    world.role = 'unknown';
  });
});

Given('I am a registered user', () => {
  cy.getWorld().then(world => {
    world.role = 'user';
  });
});

Given('I am an administrator', () => {
  cy.getWorld().then(world => {
    world.role = 'admin';
  });
});
