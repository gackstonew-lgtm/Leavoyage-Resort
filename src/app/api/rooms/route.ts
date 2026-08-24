import { NextResponse } from 'next/server';
import { getRooms } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rooms = await getRooms();

    const formattedRooms = rooms.map((room) => ({
      ...room,
      amenities: typeof room.amenities === 'string' ? JSON.parse(room.amenities || '[]') : room.amenities,
      gallery_images: typeof room.gallery_images === 'string' ? JSON.parse(room.gallery_images || '[]') : room.gallery_images,
    }));

    return NextResponse.json({ success: true, data: formattedRooms });
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return NextResponse.json(
      { success: false, message: 'Could not fetch room listings. Please try again later.' },
      { status: 500 }
    );
  }
}
