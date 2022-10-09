import { Connection } from 'mongoose';
import { LevelSchema } from '../../schemas/level.schema';

export const levelProvider = [
  {
    provide: 'LEVEL_PROVIDER',
    useFactory: (connection: Connection) =>
      connection.model('Level', LevelSchema, 'levels'),
    inject: ['DATABASE_CONNECTION'],
  },
];
