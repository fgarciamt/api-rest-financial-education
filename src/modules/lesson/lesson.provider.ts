import { Connection } from 'mongoose';
import { LessonSchema } from '../../schemas/lesson.schema';

export const lessonProvider = [
  {
    provide: 'LESSON_PROVIDER',
    useFactory: (connection: Connection) =>
      connection.model('Lesson', LessonSchema, 'lessons'),
    inject: ['DATABASE_CONNECTION'],
  },
];
