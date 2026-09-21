import { NextResponse } from 'next/server';
import { createConferenceEnquiry } from '@/lib/db';

export const dynamic = 'force-dynamic';


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { organization, contact_name, phone, email, event_type, event_date, attendees, required_services, message } = body;

    if (!contact_name || contact_name.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Contact name is required.' }, { status: 400 });
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, message: 'Valid email address is required.' }, { status: 400 });
    }

    if (!phone || phone.trim().length < 8) {
      return NextResponse.json({ success: false, message: 'Valid contact phone number is required.' }, { status: 400 });
    }

    if (!event_type || !event_date) {
      return NextResponse.json({ success: false, message: 'Event type and date are required.' }, { status: 400 });
    }

    const confResult = await createConferenceEnquiry({
      organization: organization ? organization.trim() : '',
      contact_name: contact_name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      event_type,
      event_date,
      attendees: parseInt(attendees || 10, 10),
      required_services: Array.isArray(required_services) ? JSON.stringify(required_services) : JSON.stringify([]),
      message: message ? message.trim() : '',
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your conference & event quote request has been prepared for transmission.',
      mailto_url: confResult.mailto_url,
      whatsapp_url: confResult.whatsapp_url,
    });
  } catch (error) {
    console.error('Error processing conference enquiry:', error);
    return NextResponse.json(
      { success: false, message: 'Could not process event request. Please contact our events line directly.' },
      { status: 500 }
    );
  }
}
