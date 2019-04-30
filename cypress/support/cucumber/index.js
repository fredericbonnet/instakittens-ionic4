/*
 * Cypress Cucumber initialization.
 */
import { World } from './world';

/**
 * Register world object in Cucumber steps.
 */
Cypress.Commands.add('getWorld', function() {
  if (!this.world) {
    // Create new world object.
    this.world = new World();
  }
  return this.world;
});
