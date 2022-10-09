import { Document } from 'mongoose';

export interface ILevel extends Document {
  title: string;
  description: string;
  guideId: string;
  status: boolean;
}
