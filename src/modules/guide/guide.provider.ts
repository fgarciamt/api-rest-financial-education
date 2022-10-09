import { Connection } from 'mongoose';
import { GuideSchema } from '../../schemas/guide.schema';

export const guideProvider = [
  {
    provide: 'GUIDE_PROVIDER',
    useFactory: (connection: Connection) =>
      connection.model('Guide', GuideSchema, 'guides'),
    inject: ['DATABASE_CONNECTION'],
  },
];
