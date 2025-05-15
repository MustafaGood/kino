import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Subscriber from '@/lib/models/subscriber';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    await connectDB();
    
    // Check if subscriber already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return NextResponse.json(
          { message: 'Already subscribed' },
          { status: 200 }
        );
      }
      
      // Reactivate subscription
      existingSubscriber.isActive = true;
      await existingSubscriber.save();
      
      return NextResponse.json({
        message: 'Subscription reactivated successfully'
      });
    }
    
    // Create new subscription
    const subscriber = await Subscriber.create({
      email,
      isActive: true
    });
    
    return NextResponse.json(subscriber, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
} 