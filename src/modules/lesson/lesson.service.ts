import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ILesson } from '../../documents/lesson.document';

@Injectable()
export class LessonService {
  constructor(
    @Inject('LESSON_PROVIDER')
    private lessonModel: Model<ILesson>,
  ) {}

  async findAll(): Promise<ILesson[]> {
    return this.lessonModel.find();
  }

  async create(lesson: ILesson): Promise<ILesson> {
    return this.lessonModel.create(lesson);
  }

  async update(id: string, lesson: ILesson): Promise<ILesson> {
    return this.lessonModel.findByIdAndUpdate(id, lesson);
  }

  async delete(id: string): Promise<void> {
    this.lessonModel.findByIdAndDelete(id);
  }
}
