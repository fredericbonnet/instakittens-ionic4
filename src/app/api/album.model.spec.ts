import * as faker from 'faker';
import { Album } from './album.model';

/** Generate a fake Album. */
export function fakeAlbum(): Album {
  const id = faker.random.uuid();
  const user_id = faker.random.uuid();
  const title = faker.lorem.sentence(4).slice(0, -1);
  const type = faker.random.arrayElement(['PUBLIC', 'RESTRICTED', 'PRIVATE']);
  const description = faker.lorem.sentence(10);

  return { id, user_id, title, type, description };
}
