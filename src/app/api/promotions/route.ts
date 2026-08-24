import { NextResponse } from 'next/server';
import { getPromotions } from '@/lib/db';

export async function GET() {
  try {
    const promotions = await getPromotions();
    return NextResponse.json({ success: true, data: promotions });
  } catch (error) {
    console.error('Error fetching promotions:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch packages.' }, { status: 500 });
  }
}
