import { Module } from '@nestjs/common';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { SharedModule } from '../../shared/shared.module';
import { lessonProvider } from './lesson.provider';

@Module({
  imports: [SharedModule],
  controllers: [LessonController],
  providers: [LessonService, ...lessonProvider],
})
export class LessonModule {}
