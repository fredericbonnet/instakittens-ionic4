export class Album {
  id: number;
  user_id: number;
  title: string;
  type: 'PUBLIC' | 'RESTRICTED' | 'PRIVATE';
  description: string;
}
