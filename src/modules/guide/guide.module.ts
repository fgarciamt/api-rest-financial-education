import { Module } from '@nestjs/common';
import { GuideController } from './guide.controller';
import { GuideService } from './guide.service';
import { guideProvider } from './guide.provider';
import { SharedModule } from '../../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [GuideController],
  providers: [GuideService, ...guideProvider],
})
export class GuideModule {}
