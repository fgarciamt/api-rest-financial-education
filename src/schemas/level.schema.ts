import { Schema } from 'mongoose';

export const LevelSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    guideId: { type: String, required: true }, 
    status: { type: Boolean, default: true },
  },
  { timestamps: true },
);
