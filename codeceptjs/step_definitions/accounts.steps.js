/// <reference path="../steps.d.ts" />

const { I, useRole } = inject();

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

Given('I am not identified', async () => {
  const world = await I.getWorld();
  delete world.role;
  useRole('anonymous');
});

Given('I am identified', async () => {
  const world = await I.getWorld();
  useRole(world.role);
});
