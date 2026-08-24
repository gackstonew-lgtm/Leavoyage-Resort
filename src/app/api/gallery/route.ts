import { NextResponse } from 'next/server';
import { getGallery } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const items = await getGallery(category);
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch gallery.' }, { status: 500 });
  }
}
