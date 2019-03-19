import * as faker from 'faker';
import { Comment } from './comment.model';

/** Generate a fake Comment. */
export function fakeComment(): Comment {
  const id = faker.random.uuid();
  const photo_id = faker.random.uuid();
  const user_id = faker.random.uuid();
  const date = faker.date.past();
  const message = faker.lorem.sentences();

  return { id, photo_id, user_id, date, message };
}
