import * as faker from 'faker';
import { User } from './user.model';

/** Generate a fake User. */
export function fakeUser(): User {
  const id = faker.random.uuid();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const avatar = faker.image.avatar();

  return { id, username, firstName, lastName, email, avatar };
}
