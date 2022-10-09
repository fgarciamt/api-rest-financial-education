import { Document } from 'mongoose';

export interface ILesson extends Document {
  title: string;
  description: string;
  levelId: string;
  status: boolean;
}
