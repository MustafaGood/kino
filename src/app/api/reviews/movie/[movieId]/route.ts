import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Review from '@/lib/models/review';

export async function GET(
  request: Request,
  { params }: { params: { movieId: string } }
) {
  try {
    await connectDB();
    const { movieId } = params;
    const reviews = await Review.find({ movieId }).populate('userId');
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reviews for this movie' },
      { status: 500 }
    );
  }
}
