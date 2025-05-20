import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Review from '@/lib/models/review';

// @sv-expect-error Next.js typinferensbugg för dynamiska API-routningshanterare
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const review = await Review.findByIdAndDelete(params.id);
    
    if (!review) {
      return NextResponse.json(
        { error: 'Review not found' }, // Recension hittades inte
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Review deleted successfully' }); // Recension raderad
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete review' }, // Misslyckades med att radera recension
      { status: 500 }
    );
  }
}