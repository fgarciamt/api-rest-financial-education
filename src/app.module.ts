import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuideModule } from './modules/guide/guide.module';
import { LevelModule } from './modules/level/level.module';
import { LessonModule } from './modules/lesson/lesson.module';

@Module({
  imports: [ConfigModule.forRoot(), GuideModule, LevelModule, LessonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
