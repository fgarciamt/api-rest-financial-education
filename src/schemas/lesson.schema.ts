import { Schema } from 'mongoose';

export const LessonSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    levelId: { type: String, required: true }, 
    status: { type: Boolean, default: true },
  },
  { timestamps: true },
);
