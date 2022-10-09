import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { LessonService } from './lesson.service';
import { ILesson } from '../../documents/lesson.document';

@Controller('lesson')
export class LessonController {
  constructor(private lessonService: LessonService) {}

  @Get()
  async findAll(): Promise<ILesson[]> {
    return this.lessonService.findAll();
  }

  @Post()
  async create(@Body() lesson: ILesson): Promise<ILesson> {
    return this.lessonService.create(lesson);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() lesson: ILesson,
  ): Promise<ILesson> {
    return this.lessonService.update(id, lesson);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.lessonService.delete(id);
  }
}
