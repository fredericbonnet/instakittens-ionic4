import * as faker from 'faker';
import { Photo } from './photo.model';

/** Generate a fake Photo. */
export function fakePhoto(): Photo {
  const id = faker.random.uuid();
  const album_id = faker.random.uuid();
  const title = faker.lorem.sentence(4).slice(0, -1);
  const url = faker.image.imageUrl();
  const date = faker.date.past();
  const description = faker.lorem.sentence(10);

  return { id, album_id, title, url, date, description };
}
