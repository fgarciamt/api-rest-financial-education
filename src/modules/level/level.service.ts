import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ILevel } from '../../documents/level.document';

@Injectable()
export class LevelService {
  constructor(
    @Inject('LEVEL_PROVIDER')
    private levelModel: Model<ILevel>,
  ) {}

  async findAll(): Promise<ILevel[]> {
    return this.levelModel.find();
  }

  async create(level: ILevel): Promise<ILevel> {
    return this.levelModel.create(level);
  }

  async update(id: string, level: ILevel): Promise<ILevel> {
    return this.levelModel.findByIdAndUpdate(id, level);
  }

  async delete(id: string): Promise<void> {
    this.levelModel.findByIdAndDelete(id);
  }
}
