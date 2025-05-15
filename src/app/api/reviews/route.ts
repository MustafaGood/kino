import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Review from '@/lib/models/review';

export async function GET() {
  try {
    await connectDB();
    const reviews = await Review.find().populate('movieId').populate('userId');
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();
    
    const review = await Review.create(body);
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 }
    );
  }
} 