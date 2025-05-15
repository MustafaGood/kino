import mongoose, { Schema, Document } from 'mongoose';

export interface IMovie extends Document {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string[];
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const MovieSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    releaseDate: {
      type: Date,
      required: [true, 'Release date is required'],
    },
    genre: [{
      type: String,
      required: [true, 'At least one genre is required'],
    }],
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Movie || mongoose.model<IMovie>('Movie', MovieSchema); 