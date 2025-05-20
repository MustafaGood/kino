import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  movieId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema: Schema = new Schema(
  {
    movieId: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
      required: [true, 'Movie ID is required'], // Film-ID krävs
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'], // Användar-ID krävs
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'], // Betyg krävs
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'], // Kommentar krävs
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);