import { NextResponse } from 'next/server';
import { createBooking } from '@/lib/db';

export const dynamic = 'force-dynamic';


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { guest_name, email, phone, check_in, check_out, adults, children, rooms_count, room_type, special_requests } = body;

    // Server-side validation
    if (!guest_name || typeof guest_name !== 'string' || guest_name.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Please provide a valid full name.' }, { status: 400 });
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ success: false, message: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
      return NextResponse.json({ success: false, message: 'Please provide a valid phone number.' }, { status: 400 });
    }

    if (!check_in || !check_out) {
      return NextResponse.json({ success: false, message: 'Check-in and Check-out dates are required.' }, { status: 400 });
    }

    const checkInDate = new Date(check_in);
    const checkOutDate = new Date(check_out);
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime()) || checkOutDate <= checkInDate) {
      return NextResponse.json({ success: false, message: 'Check-out date must be after check-in date.' }, { status: 400 });
    }

    // Generate unique reference number
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceNo = `LVB-${Date.now().toString().slice(-4)}${randomSuffix}`;

    const bookingResult = await createBooking({
      reference_no: referenceNo,
      guest_name: guest_name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      check_in,
      check_out,
      adults: parseInt(adults || 1, 10),
      children: parseInt(children || 0, 10),
      rooms_count: parseInt(rooms_count || 1, 10),
      room_type: room_type || 'General Deluxe',
      special_requests: special_requests ? special_requests.trim() : '',
    });

    return NextResponse.json({
      success: true,
      message: 'Your booking enquiry has been generated successfully! Confirm via WhatsApp or Email.',
      reference_no: referenceNo,
      mailto_url: bookingResult.mailto_url,
      whatsapp_url: bookingResult.whatsapp_url,
    });
  } catch (error) {
    console.error('Error processing booking request:', error);
    return NextResponse.json(
      { success: false, message: 'Sorry, we could not process your booking request right now. Please contact our reception desk directly.' },
      { status: 500 }
    );
  }
}
