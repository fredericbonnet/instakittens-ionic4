/// <reference path="../steps.d.ts" />

const { I } = inject();

Given('I am an unknown user', async () => {
  const world = await I.getWorld();
  world.role = 'unknown';
});

Given('I am a registered user', async () => {
  const world = await I.getWorld();
  world.role = 'user';
});

Given('I am an administrator', async () => {
  const world = await I.getWorld();
  world.role = 'admin';
});
