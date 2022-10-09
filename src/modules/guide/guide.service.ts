import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IGuide } from 'src/documents/guide.document';

@Injectable()
export class GuideService {
  constructor(
    @Inject('GUIDE_PROVIDER')
    private guideModel: Model<IGuide>,
  ) {}

  async findAll(): Promise<IGuide[]> {
    return this.guideModel.find();
  }

  async create(guide: IGuide): Promise<IGuide> {
    return this.guideModel.create(guide);
  }

  async update(id: string, guide: IGuide): Promise<IGuide> {
    return this.guideModel.findByIdAndUpdate(id, guide);
  }

  async delete(id: string): Promise<void> {
    this.guideModel.findByIdAndDelete(id);
  }
}
