import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { LevelService } from './level.service';
import { ILevel } from '../../documents/level.document';

@Controller('level')
export class LevelController {
  constructor(private levelService: LevelService) {}

  @Get()
  async findAll(): Promise<ILevel[]> {
    return this.levelService.findAll();
  }

  @Post()
  async create(@Body() level: ILevel): Promise<ILevel> {
    return this.levelService.create(level);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() level: ILevel,
  ): Promise<ILevel> {
    return this.levelService.update(id, level);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.levelService.delete(id);
  }
}
