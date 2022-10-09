import { Document } from 'mongoose';

export interface IGuide extends Document {
  title: string;
  description: string;
  status: boolean;
}
