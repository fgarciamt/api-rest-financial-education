import { Module } from '@nestjs/common';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';
import { SharedModule } from '../../shared/shared.module';
import { levelProvider } from './level.provider';

@Module({
  imports: [SharedModule],
  controllers: [LevelController],
  providers: [LevelService, ...levelProvider],
})
export class LevelModule {}
