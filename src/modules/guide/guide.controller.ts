import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { GuideService } from './guide.service';
import { IGuide } from '../../documents/guide.document';

@Controller('guide')
export class GuideController {
  constructor(private guideService: GuideService) {}

  @Get()
  async findAll(): Promise<IGuide[]> {
    return this.guideService.findAll();
  }

  @Post()
  async create(@Body() guide: IGuide): Promise<IGuide> {
    return this.guideService.create(guide);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() guide: IGuide,
  ): Promise<IGuide> {
    return this.guideService.update(id, guide);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.guideService.delete(id);
  }
}
